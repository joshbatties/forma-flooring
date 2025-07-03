#!/usr/bin/env python3
import os
import PyPDF2
import re
import json
from pathlib import Path

def extract_text_from_pdf(pdf_path):
    """Extract text from a PDF file"""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading {pdf_path}: {str(e)}")
        return ""
    return text

def clean_text(text):
    """Clean the extracted text by removing unwanted references"""
    # Remove ChatGPT references
    text = re.sub(r'ChatGPT\s*[^\s]*', '', text, flags=re.IGNORECASE)
    text = re.sub(r'GPT-\d+', '', text, flags=re.IGNORECASE)
    text = re.sub(r'OpenAI', '', text, flags=re.IGNORECASE)
    text = re.sub(r'AI\s*assistant', '', text, flags=re.IGNORECASE)
    
    # Remove common competitor references (add more as needed)
    competitors = [
        r'Bunnings\s*Warehouse',
        r'Masters\s*Hardware',
        r'Timber\s*Flooring\s*Specialists?',
        r'Floor\s*Central',
        r'Carpet\s*Court',
        r'Harvey\s*Norman',
        r'Flooring\s*Xtra',
        r'Quick\s*Step',
        r'Boral\s*Timber',
        r'James\s*Hardie'
    ]
    
    for competitor in competitors:
        text = re.sub(competitor, '[competitor name]', text, flags=re.IGNORECASE)
    
    # Clean up extra whitespace and line breaks
    text = re.sub(r'\n\s*\n', '\n\n', text)
    text = re.sub(r'\s+', ' ', text)
    text = text.strip()
    
    return text

def title_to_slug(title):
    """Convert title to URL-friendly slug"""
    slug = title.lower()
    slug = re.sub(r'[^\w\s-]', '', slug)
    slug = re.sub(r'[-\s]+', '-', slug)
    return slug.strip('-')

def extract_title_from_filename(filename):
    """Extract title from PDF filename"""
    title = filename.replace('.pdf', '')
    title = title.replace('_', ' ')
    return title

def process_pdfs():
    """Process all PDFs in the blog-posts directory"""
    blog_posts_dir = Path("blog-posts")
    extracted_posts = []
    
    if not blog_posts_dir.exists():
        print("blog-posts directory not found!")
        return
    
    pdf_files = list(blog_posts_dir.glob("*.pdf"))
    print(f"Found {len(pdf_files)} PDF files")
    
    for i, pdf_file in enumerate(pdf_files, 1):
        print(f"Processing {pdf_file.name}...")
        
        # Extract text
        raw_text = extract_text_from_pdf(pdf_file)
        if not raw_text:
            print(f"Failed to extract text from {pdf_file.name}")
            continue
        
        # Clean text
        cleaned_text = clean_text(raw_text)
        
        # Extract title from filename
        title = extract_title_from_filename(pdf_file.name)
        slug = title_to_slug(title)
        
        # Create post data
        post_data = {
            "id": 100 + i,  # Start from 100 to avoid conflicts with existing posts
            "title": title,
            "slug": slug,
            "content": cleaned_text,
            "original_filename": pdf_file.name
        }
        
        extracted_posts.append(post_data)
        
        # Save individual text file for review
        output_file = Path("extracted_posts") / f"{slug}.txt"
        output_file.parent.mkdir(exist_ok=True)
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(f"Title: {title}\n")
            f.write(f"Slug: {slug}\n")
            f.write(f"Original: {pdf_file.name}\n")
            f.write("-" * 50 + "\n\n")
            f.write(cleaned_text)
        
        print(f"Extracted {len(cleaned_text)} characters from {pdf_file.name}")
    
    # Save all posts as JSON for further processing
    with open("extracted_blog_posts.json", 'w', encoding='utf-8') as f:
        json.dump(extracted_posts, f, indent=2, ensure_ascii=False)
    
    print(f"\nExtracted {len(extracted_posts)} blog posts")
    print("Individual text files saved in 'extracted_posts/' directory")
    print("All posts data saved to 'extracted_blog_posts.json'")

if __name__ == "__main__":
    process_pdfs() 