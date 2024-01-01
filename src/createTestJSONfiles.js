const fs = require('fs');
const path = require('path');

const johnData = {
  name: 'john',
  age: '53',
  schools: [
    { name: 'Snow Elementary', years: '1975-1981' },
    { name: 'Snow Jr High', years: '1981-1984' }
  ]
};

const annData = {
  name: 'ann',
  age: '23',
  schools: [
    { name: 'Grace Elementary', years: '2006-2011' },
    { name: 'Fulton Jr High', years: '2011-2014' },
    { name: 'Shilder High', years: '2014-2018' }
  ]
};

const publicDbDir = path.join(__dirname, 'public', 'db');

// Ensure the directory exists
if (!fs.existsSync(publicDbDir)) {
  fs.mkdirSync(publicDbDir, { recursive: true });
}

// Write JSON files
fs.writeFileSync(path.join(publicDbDir, 'john.json'), JSON.stringify(johnData, null, 2));
fs.writeFileSync(path.join(publicDbDir, 'ann.json'), JSON.stringify(annData, null, 2));

console.log('JSON files created successfully.');