import json

def clean_blog_content():
    content = """
<h2>Introduction</h2>
<p>You've invested in beautiful timber flooring, and now you want to keep it looking its best for years to come. This comprehensive maintenance guide is tailored specifically for Melbourne homes, taking into account our unique climate and lifestyle. Follow these expert tips to protect your investment and maintain that luxurious timber finish.</p>

<h2>Daily Care and Protection</h2>

<h3>Regular Cleaning</h3>
<ul>
<li>Sweep or vacuum daily in high-traffic areas</li>
<li>Use a soft-bristled broom or vacuum with a floor-head attachment</li>
<li>Remove dust and grit promptly to prevent scratching</li>
<li>Clean spills immediately to prevent staining</li>
</ul>

<h3>Preventative Measures</h3>
<ul>
<li>Place quality doormats at all entrances</li>
<li>Use felt pads under furniture legs</li>
<li>Keep pets' nails trimmed</li>
<li>Avoid walking on floors with high heels</li>
<li>Use protective mats under office chairs</li>
</ul>

<h2>Weekly Maintenance</h2>

<h3>Proper Mopping Technique</h3>
<p>Follow these steps for effective weekly cleaning:</p>
<ul>
<li>Use a well-wrung, damp (not wet) mop</li>
<li>Choose a pH-neutral timber floor cleaner</li>
<li>Work in the direction of the wood grain</li>
<li>Avoid excess water which can damage the timber</li>
<li>Ensure the floor dries completely after mopping</li>
</ul>

<h3>Climate Control</h3>
<p>Melbourne's variable weather requires special attention:</p>
<ul>
<li>Maintain consistent indoor humidity (35-55%)</li>
<li>Use air conditioning and heating moderately</li>
<li>Consider a humidifier in very dry weather</li>
<li>Ensure good ventilation throughout your home</li>
</ul>

<h2>Seasonal Care</h2>

<h3>Summer Maintenance</h3>
<ul>
<li>Control direct sunlight with curtains or blinds</li>
<li>Monitor humidity levels during hot spells</li>
<li>Check for expansion in humid weather</li>
<li>Clean more frequently due to increased outdoor activity</li>
</ul>

<h3>Winter Care</h3>
<ul>
<li>Watch for heating-related dryness</li>
<li>Clean wet shoes before walking on floors</li>
<li>Address any water marks promptly</li>
<li>Maintain good airflow to prevent moisture buildup</li>
</ul>

<h2>Dealing with Common Issues</h2>

<h3>Surface Scratches</h3>
<ul>
<li>Use timber touch-up markers for minor scratches</li>
<li>Apply timber repair wax for deeper scratches</li>
<li>Consider professional buffing for multiple scratches</li>
<li>Prevent future scratches with proper protection</li>
</ul>

<h3>Water Damage</h3>
<ul>
<li>Dry spills immediately with a clean cloth</li>
<li>Use fans to speed up drying if needed</li>
<li>Monitor for any signs of warping</li>
<li>Consult professionals for serious water damage</li>
</ul>

<h2>Professional Maintenance</h2>

<h3>Regular Professional Services</h3>
<p>Schedule these services to maintain your floor's beauty:</p>
<ul>
<li>Professional deep cleaning (annually)</li>
<li>Recoating (every 3-5 years depending on wear)</li>
<li>Full sand and refinish (every 10-15 years if needed)</li>
<li>Regular inspections to catch issues early</li>
</ul>

<h3>When to Call a Professional</h3>
<ul>
<li>Deep scratches or gouges</li>
<li>Signs of water damage</li>
<li>Significant color fading</li>
<li>Squeaking or movement in boards</li>
<li>Gaps between boards</li>
</ul>

<h2>Products and Tools</h2>

<h3>Recommended Cleaning Products</h3>
<ul>
<li>pH-neutral timber floor cleaner</li>
<li>Microfiber mops and cloths</li>
<li>Soft-bristled broom</li>
<li>Vacuum with floor-head attachment</li>
<li>Timber floor polish (as recommended by manufacturer)</li>
</ul>

<h3>Products to Avoid</h3>
<ul>
<li>Steam mops or wet mops</li>
<li>Harsh chemical cleaners</li>
<li>Abrasive cleaning tools</li>
<li>Oil-based cleaning products (unless specified)</li>
<li>Generic floor polishes</li>
</ul>

<h2>Long-term Care Tips</h2>

<h3>Maintaining Value</h3>
<ul>
<li>Keep a maintenance log</li>
<li>Follow manufacturer's care instructions</li>
<li>Address issues promptly</li>
<li>Schedule regular professional maintenance</li>
<li>Update protective measures as needed</li>
</ul>

<h3>Preventative Planning</h3>
<ul>
<li>Create a cleaning schedule</li>
<li>Stock appropriate cleaning supplies</li>
<li>Monitor floor condition regularly</li>
<li>Plan for periodic professional services</li>
<li>Budget for long-term maintenance</li>
</ul>

<p>Remember, proper maintenance not only keeps your timber floors looking beautiful but also protects your investment. By following this guide and staying proactive with care, your Melbourne home's timber flooring will continue to impress for years to come.</p>
"""

    # Read the current file
    with open('data/blog-posts.ts', 'r', encoding='utf-8') as f:
        data = f.read()

    # Find the blog post and replace its content
    start = data.find('id: 18,')
    if start == -1:
        print("Blog post not found")
        return

    # Find the content section
    content_start = data.find('content: `', start)
    content_end = data.find('`', content_start + len('content: `') + 1)
    
    # Replace the content
    new_data = data[:content_start + len('content: `')] + content + data[content_end:]

    # Write the updated content back
    with open('data/blog-posts.ts', 'w', encoding='utf-8') as f:
        f.write(new_data)

if __name__ == "__main__":
    clean_blog_content() 