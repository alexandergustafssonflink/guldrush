const run = require('./scraper/connection.js')

export default function handler(req, res) {
//   if (req.method === 'GET') {
      
      run(); 
//   } else {
      res.statusCode = 200;
      res.end(); 
//   }
}