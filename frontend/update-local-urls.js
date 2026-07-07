const fs = require('fs');
const path = require('path');

const directoryPath = path.join(__dirname, 'src');

const mapping = {
  '1--tyfbRraODmAOVMpkXe7WXykkq6mryY': '/images/Navigation/Logo.png',
  '12JwFDoiY7aETn9h6O6yFLdukJc1G0OYF': '/images/Section 1/Section 1_Making Everyday.png',
  '1KKD-sR8locv8yJ3niN14-Xn8PdG2ei81': '/images/Section 3/Section 3_FBL 1.png',
  '1ZDIQBbIIB1KEDjgKd4qjgnlkjuTa-Fe7': '/images/Section 3/Section 3_FBL 2.png',
  '1pX59sfONi66HF0pZ-1QdORP0iKAGBJMR': '/images/Section 4/Section 4_Scientist.png',
  '10IrGvdCtfMUmS84iT5wskFyw3u6xjXEz': '/images/Background/Background.jpg',
  '1In3lPMsPyxhpqcUlTMtawI8d9TZjl3t_': '/images/Section 6/Section 6_Created by Parent.png',
  '1aMGlCkCAkjDszqCUlkR-3OQwSVmAN73e': '/images/Section 6/Review_Anisa.png',
  '1WXGNFzjaf10wvbG8itcTlko5j_KB8zXJ': '/images/Section 6/Review_Aurel.png',
  '1wXy-ygnSGQLbP8Bjcv2mLkzvd6oXIK2o': '/images/Section 6/Review_Ayu.png',
  '1mzKQWg8EoTVfHupiti_jILfnYoh3dP-4': '/images/Section 4/Section 4_Formulated Australia.png',
  '15eo_jCFrsbZLmhYNDfGIcSwtumUwTus9': '/images/Section 2/Section 2_Baby.png'
};

function findAndReplace(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      findAndReplace(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      
      for (const [id, localPath] of Object.entries(mapping)) {
        // Replace both possible URL formats
        const url1 = `https://drive.google.com/uc?export=view&id=${id}`;
        const url2 = `https://lh3.googleusercontent.com/d/${id}`;
        
        // Escape characters for regex
        const regex1 = new RegExp(url1.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const regex2 = new RegExp(url2.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        
        content = content.replace(regex1, localPath);
        content = content.replace(regex2, localPath);
      }
      
      if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

findAndReplace(directoryPath);
console.log("Done updating URLs to local paths!");
