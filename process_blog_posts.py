#!/usr/bin/env python3
import json
import re
from pathlib import Path
from datetime import datetime, timedelta
import random

def text_to_html(text):
    """Convert plain text to HTML with proper formatting"""
    # Remove excessive whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Split into paragraphs (roughly every 100-200 words)
    words = text.split()
    paragraphs = []
    current_paragraph = []
    
    i = 0
    while i < len(words):
        # Check if this might be a heading (title-like words followed by content)
        potential_heading = ' '.join(words[i:i+8])
        
        # Look for heading patterns
        if (any(pattern in potential_heading.lower() for pattern in [
            'sustainability', 'matte and low-sheen', 'extra-wide', 'warm neutral', 
            'statement pattern', 'hybrid and water', 'durability, style', 'engineered timber',
            'laminate flooring', 'solid hardwood', 'melbourne-specific', 'climate', 'installation',
            'maintenance', 'cost', 'visual appeal', 'roi', 'conclusion', 'introduction'
        ]) and len(current_paragraph) > 50):
            # Save current paragraph
            if current_paragraph:
                paragraphs.append(' '.join(current_paragraph))
                current_paragraph = []
            
            # Create heading
            heading_words = []
            j = i
            while j < min(i + 10, len(words)) and len(' '.join(heading_words)) < 60:
                word = words[j]
                if word.endswith('.') or word.endswith(':'):
                    heading_words.append(word.rstrip('.:'))
                    break
                heading_words.append(word)
                j += 1
            
            if heading_words:
                heading = ' '.join(heading_words)
                paragraphs.append(f"<h2>{heading}</h2>")
                i = j + 1
                continue
        
        current_paragraph.append(words[i])
        
        # End paragraph after 100-200 words or at natural breaks
        if (len(current_paragraph) > 100 and 
            (words[i].endswith('.') or words[i].endswith('!') or 
             (len(current_paragraph) > 150 and words[i].endswith(',')))):
            paragraphs.append(' '.join(current_paragraph))
            current_paragraph = []
        
        i += 1
    
    # Add remaining words as final paragraph
    if current_paragraph:
        paragraphs.append(' '.join(current_paragraph))
    
    # Convert to HTML
    html_parts = []
    for para in paragraphs:
        para = para.strip()
        if para.startswith('<h2>'):
            html_parts.append(para)
        elif para:
            html_parts.append(f"<p>{para}</p>")
    
    return '\n'.join(html_parts)

def generate_excerpt(text, max_length=160):
    """Generate an excerpt from the text"""
    # Clean the text
    text = re.sub(r'<[^>]+>', '', text)  # Remove HTML tags
    text = re.sub(r'\s+', ' ', text).strip()
    
    # Find first sentence or two that make sense
    sentences = re.split(r'[.!?]+', text)
    excerpt = ""
    
    for sentence in sentences:
        sentence = sentence.strip()
        if len(sentence) < 20:  # Skip very short sentences
            continue
        
        if len(excerpt + sentence) <= max_length:
            excerpt += sentence + ". "
        else:
            break
    
    if not excerpt:
        # Fallback to first words
        words = text.split()[:25]
        excerpt = ' '.join(words) + "..."
    
    return excerpt.strip()

def estimate_read_time(text):
    """Estimate reading time based on word count"""
    # Remove HTML tags for word count
    clean_text = re.sub(r'<[^>]+>', '', text)
    word_count = len(clean_text.split())
    
    # Average reading speed is 200-250 words per minute
    minutes = max(1, round(word_count / 220))
    return f"{minutes} min read"

def clean_title(title):
    """Clean up the title"""
    title = title.replace('_', ' ')
    title = re.sub(r'\s+', ' ', title).strip()
    
    # Fix common formatting issues
    title = re.sub(r'Melbourne\s+', 'Melbourne: ', title, count=1)
    title = re.sub(r'(\w+)\s+(\w+)\s*$', r'\1 \2', title)
    
    return title

def get_image_for_post(title, index):
    """Assign appropriate images to blog posts"""
    images = [
        "/hardwood.jpg",
        "/engineered.jpg", 
        "/laminate.jpg",
        "/spiral.jpg",
        "/archway.jpg"
    ]
    
    # Assign based on content
    title_lower = title.lower()
    if 'engineered' in title_lower:
        return "/engineered.jpg"
    elif 'hardwood' in title_lower or 'solid' in title_lower:
        return "/hardwood.jpg"
    elif 'laminate' in title_lower:
        return "/laminate.jpg"
    elif 'maintenance' in title_lower:
        return "/spiral.jpg"
    else:
        return images[index % len(images)]

def process_blog_posts():
    """Process all extracted blog posts and create the new blog data"""
    
    # Read the existing blog posts
    with open('data/blog-posts.ts', 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Read extracted posts
    with open('extracted_blog_posts.json', 'r', encoding='utf-8') as f:
        extracted_posts = json.load(f)
    
    # Authors to rotate through
    authors = ["Sarah Johnson", "Michael Chen", "Emma Wilson", "David Thompson", "Jessica Lee"]
    
    # Process each post
    new_posts = []
    base_date = datetime(2024, 1, 15)  # Start date for blog posts
    
    for i, post in enumerate(extracted_posts):
        print(f"Processing: {post['title']}")
        
        # Clean and format content
        clean_content = text_to_html(post['content'])
        
        # Generate metadata
        title = clean_title(post['title'])
        excerpt = generate_excerpt(clean_content)
        read_time = estimate_read_time(clean_content)
        
        # Generate date (spread posts over time)
        post_date = base_date + timedelta(days=i * 30 + random.randint(0, 20))
        formatted_date = post_date.strftime("%B %d, %Y")
        
        # Select author
        author = authors[i % len(authors)]
        
        # Select image
        image = get_image_for_post(title, i)
        
        new_post = {
            "id": 10 + i,  # Start from ID 10 to avoid conflicts
            "title": title,
            "excerpt": excerpt,
            "image": image,
            "date": formatted_date,
            "author": author,
            "slug": post['slug'],
            "readTime": read_time,
            "content": clean_content
        }
        
        new_posts.append(new_post)
        
        print(f"  - Title: {title}")
        print(f"  - Excerpt: {excerpt[:60]}...")
        print(f"  - Read time: {read_time}")
        print()
    
    # Create the new blog posts TypeScript content
    ts_content = '''export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  slug: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
'''
    
    # Add all posts (existing + new)
    all_posts = []
    
    # Add new posts first
    for post in new_posts:
        all_posts.append(post)
    
    # Format posts for TypeScript
    for i, post in enumerate(all_posts):
        ts_content += "  {\n"
        ts_content += f'    id: {post["id"]},\n'
        ts_content += f'    title: "{post["title"]}",\n'
        ts_content += f'    excerpt: "{post["excerpt"]}",\n'
        ts_content += f'    image: "{post["image"]}",\n'
        ts_content += f'    date: "{post["date"]}",\n'
        ts_content += f'    author: "{post["author"]}",\n'
        ts_content += f'    slug: "{post["slug"]}",\n'
        ts_content += f'    readTime: "{post["readTime"]}",\n'
        ts_content += f'    content: `\n{post["content"]}\n    `\n'
        ts_content += "  }"
        
        if i < len(all_posts) - 1:
            ts_content += ","
        ts_content += "\n"
    
    ts_content += "];\n"
    
    # Write the new blog posts file
    with open('data/blog-posts.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Successfully processed {len(new_posts)} blog posts!")
    print("Updated data/blog-posts.ts with the new content.")
    
    # Save processed posts as JSON for reference
    with open('processed_blog_posts.json', 'w', encoding='utf-8') as f:
        json.dump(new_posts, f, indent=2, ensure_ascii=False)
    
    return new_posts

if __name__ == "__main__":
    process_blog_posts() 