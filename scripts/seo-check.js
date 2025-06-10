#!/usr/bin/env node

/**
 * SEO Check Script for Dra. Ângela Ribeiro Website
 * 
 * This script checks basic SEO elements on the website
 * Run with: node scripts/seo-check.js
 */

const https = require('https');
const { URL } = require('url');

const BASE_URL = 'https://angelapage.vercel.app';

// SEO Checklist
const seoChecks = [
  {
    name: 'Meta Title',
    description: 'Check if page has a proper title',
    check: (html) => {
      const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
      return {
        passed: !!titleMatch,
        value: titleMatch ? titleMatch[1] : 'No title found',
        recommendation: titleMatch ? 'Title looks good' : 'Add a descriptive title'
      };
    }
  },
  {
    name: 'Meta Description',
    description: 'Check if page has a meta description',
    check: (html) => {
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
      return {
        passed: !!descMatch,
        value: descMatch ? descMatch[1] : 'No description found',
        recommendation: descMatch ? 'Description looks good' : 'Add a meta description'
      };
    }
  },
  {
    name: 'Open Graph Tags',
    description: 'Check for Open Graph meta tags',
    check: (html) => {
      const ogTags = html.match(/<meta[^>]*property=["']og:[^"']+["'][^>]*>/gi);
      return {
        passed: ogTags && ogTags.length >= 3,
        value: ogTags ? `${ogTags.length} OG tags found` : 'No OG tags found',
        recommendation: ogTags && ogTags.length >= 3 ? 'OG tags look good' : 'Add Open Graph meta tags'
      };
    }
  },
  {
    name: 'Structured Data',
    description: 'Check for JSON-LD structured data',
    check: (html) => {
      const jsonLdMatch = html.match(/<script[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/is);
      return {
        passed: !!jsonLdMatch,
        value: jsonLdMatch ? 'JSON-LD found' : 'No JSON-LD found',
        recommendation: jsonLdMatch ? 'Structured data looks good' : 'Add JSON-LD structured data'
      };
    }
  },
  {
    name: 'H1 Tag',
    description: 'Check for H1 heading',
    check: (html) => {
      const h1Match = html.match(/<h1[^>]*>([^<]+)<\/h1>/i);
      return {
        passed: !!h1Match,
        value: h1Match ? h1Match[1] : 'No H1 found',
        recommendation: h1Match ? 'H1 looks good' : 'Add an H1 heading'
      };
    }
  },
  {
    name: 'Image Alt Text',
    description: 'Check if images have alt attributes',
    check: (html) => {
      const imgTags = html.match(/<img[^>]*>/gi);
      const imgWithAlt = html.match(/<img[^>]*alt=["'][^"']+["'][^>]*>/gi);
      return {
        passed: !imgTags || (imgWithAlt && imgWithAlt.length === imgTags.length),
        value: imgTags ? `${imgWithAlt ? imgWithAlt.length : 0}/${imgTags.length} images have alt text` : 'No images found',
        recommendation: imgTags && (!imgWithAlt || imgWithAlt.length !== imgTags.length) ? 'Add alt text to all images' : 'Alt text looks good'
      };
    }
  }
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

async function runSEOCheck() {
  console.log('🔍 Running SEO Check for Dra. Ângela Ribeiro Website\n');
  
  try {
    const html = await fetchPage(BASE_URL);
    
    console.log('📊 SEO Analysis Results:\n');
    
    let passedChecks = 0;
    
    for (const check of seoChecks) {
      const result = check.check(html);
      const status = result.passed ? '✅' : '❌';
      
      console.log(`${status} ${check.name}`);
      console.log(`   Description: ${check.description}`);
      console.log(`   Result: ${result.value}`);
      console.log(`   Recommendation: ${result.recommendation}\n`);
      
      if (result.passed) passedChecks++;
    }
    
    console.log(`📈 Summary: ${passedChecks}/${seoChecks.length} checks passed`);
    
    if (passedChecks === seoChecks.length) {
      console.log('🎉 All SEO checks passed! Your website is well optimized.');
    } else {
      console.log('⚠️  Some SEO improvements needed. Check the recommendations above.');
    }
    
    console.log('\n🔗 Additional SEO Tools:');
    console.log('- Google Search Console: https://search.google.com/search-console');
    console.log('- PageSpeed Insights: https://pagespeed.web.dev/');
    console.log('- Schema.org Validator: https://validator.schema.org/');
    console.log('- Meta Tags Checker: https://metatags.io/');
    
  } catch (error) {
    console.error('❌ Error running SEO check:', error.message);
  }
}

// Run the check
runSEOCheck(); 