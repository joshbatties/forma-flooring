import { createClient } from '@supabase/supabase-js'

// These should be set as environment variables in production
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Missing Supabase environment variables. Please check that NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY are set in your .env.local file.'
  )
}

// Log configuration (without exposing the actual key)
console.log('Supabase configuration:', {
  url: supabaseUrl,
  hasKey: !!supabaseAnonKey,
  keyLength: supabaseAnonKey?.length || 0
})

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  db: {
    schema: 'forma_flooring'
  }
})

// Test function to verify Supabase connection
export async function testSupabaseConnection(): Promise<{ success: boolean; error?: string }> {
  try {
    console.log('Testing Supabase connection with forma_flooring schema...')

    const { error } = await supabase
      .from('subscribers')
      .select('count')
      .limit(1)

    if (!error) {
      console.log('forma_flooring schema access successful')
      return { success: true }
    }

    console.log('Schema access error:', error)
    return {
      success: false,
      error: `Schema access failed: ${error.message || 'Unknown error'}`
    }
  } catch (error) {
    console.error('Supabase connection test error:', error)
    return {
      success: false,
      error: `Connection test error: ${error instanceof Error ? error.message : 'Unknown error'}`
    }
  }
}

// Database operations for newsletter subscriptions
export interface SubscriberData {
  email: string
  first_name?: string
  last_name?: string
  subscription_status?: 'active' | 'unsubscribed' | 'pending'
  subscription_source?: string
  preferences?: Record<string, any>
}

export class NewsletterService {
  static async subscribe(data: SubscriberData): Promise<{ success: boolean; error?: string }> {
    try {
      const { data: result, error } = await supabase
        .from('subscribers')
        .insert({
          email: data.email,
          first_name: data.first_name,
          last_name: data.last_name,
          subscription_status: data.subscription_status || 'active',
          subscription_source: data.subscription_source || 'website',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()

      if (error) {
        console.error('Subscription error:', error)
        console.error('Error details:', {
          message: error.message,
          code: error.code,
          details: error.details,
          hint: error.hint,
          status: error.status,
          statusText: error.statusText
        })

        // Handle empty error objects
        if (!error.message && !error.code) {
          console.error('Empty error object received. This usually indicates:')
          console.error('1. Invalid Supabase URL or API key')
          console.error('2. Network connectivity issues')
          console.error('3. Supabase project not found or not accessible')
          console.error('Current Supabase URL:', supabaseUrl)
          console.error('Current API Key:', supabaseAnonKey ? '[HIDDEN]' : 'UNDEFINED')
        }

        return {
          success: false,
          error: error.message || 'Unknown subscription error occurred'
        }
      }

      return { success: true }
    } catch (error) {
      console.error('Subscription error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  static async unsubscribe(email: string): Promise<{ success: boolean; error?: string }> {
    try {
      const { error } = await supabase
        .from('subscribers')
        .update({
          subscription_status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .eq('email', email)

      if (error) {
        console.error('Unsubscribe error:', error)
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error) {
      console.error('Unsubscribe error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  static async getSubscriber(email: string) {
    try {
      const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .eq('email', email)
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('Get subscriber error:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Get subscriber error:', error)
      return null
    }
  }
}

// Database operations for sample requests
export interface SampleRequestData {
  first_name: string
  last_name: string
  email: string
  phone: string
  state: string
  project_address: string
  postal_address?: string
  same_address: boolean
  home_owner_or_trade: 'Home Owner' | 'Builder or Trade'
  working_with_designer: 'Yes' | 'No'
  selected_samples: string[]
  hear_about: string
  newsletter_subscription: boolean
  privacy_agreement: boolean
  submission_status?: 'pending' | 'approved' | 'rejected' | 'completed'
  notes?: string
}

export class SampleRequestService {
  static async submitRequest(data: SampleRequestData): Promise<{ success: boolean; error?: string }> {
    try {
      const { data: result, error } = await supabase
        .from('samples')
        .insert({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          phone: data.phone,
          state: data.state,
          project_address: data.project_address,
          postal_address: data.postal_address,
          same_address: data.same_address,
          home_owner_or_trade: data.home_owner_or_trade,
          working_with_designer: data.working_with_designer,
          selected_samples: data.selected_samples,
          hear_about: data.hear_about,
          newsletter_subscription: data.newsletter_subscription,
          privacy_agreement: data.privacy_agreement,
          submission_status: data.submission_status || 'pending',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        })
        .select()

      if (error) {
        console.error('Sample request error:', error)
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error) {
      console.error('Sample request error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }

  static async getSampleRequest(id: number) {
    try {
      const { data, error } = await supabase
        .from('samples')
        .select('*')
        .eq('id', id)
        .single()

      if (error && error.code !== 'PGRST116') { // PGRST116 is "not found"
        console.error('Get sample request error:', error)
        return null
      }

      return data
    } catch (error) {
      console.error('Get sample request error:', error)
      return null
    }
  }

  static async updateSampleRequestStatus(id: number, status: 'pending' | 'approved' | 'rejected' | 'completed', notes?: string): Promise<{ success: boolean; error?: string }> {
    try {
      const updateData: any = {
        submission_status: status,
        updated_at: new Date().toISOString()
      }

      if (status !== 'pending') {
        updateData.processed_at = new Date().toISOString()
      }

      if (notes) {
        updateData.notes = notes
      }

      const { error } = await supabase
        .from('samples')
        .update(updateData)
        .eq('id', id)

      if (error) {
        console.error('Update sample request status error:', error)
        return { success: false, error: error.message }
      }

      return { success: true }
    } catch (error) {
      console.error('Update sample request status error:', error)
      return { success: false, error: 'An unexpected error occurred' }
    }
  }
}
