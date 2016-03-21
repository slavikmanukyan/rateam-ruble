const cheerio = require('cheerio');
const request = require('request');
var t;

function getRuble(){
  request.post('http://rate.am/am/armenian-dram-exchange-rates/exchange-points/cash?tp=1&rt=0',{form:{
__EVENTTARGET:'ctl00$Content$RB$lbb3',
__EVENTARGUMENT:'',
__LASTFOCUS:'',
__VIEWSTATE:'',
__EVENTVALIDATION:'/wEWswEC/q2g6QICwtzR1w4CoODysQ4CyKGqpwkC++n8mAQCs/WPpAICn4/B9goC9oLhoQsC/YbN6gwCtOzL1wcC5v7s1AgC4f7w8QMC5v6oywIC4f684A0C5v6g5AgC4f60gQMC5v7s2gIC4f7w9w0C5v6k6wgC4f7IhwMC5v7g2QIC4f709g0Cxf7A0wgCwv7UiAMCxf6MwgICwv6Q/w0Cxf7E0ggCwv7ojwMCxf6AwQICwv6U/g0Cxf7Y0QgCwv7sjgMCxf6EwAICwv6o/Q0Cxf7c0AgCwv7gjQMCxf6YxwICwv6s/A0Cxf7Q1wgCwv7kjAMCxf6cxgICwv6g4w0Cxf7U1ggCwv748wMCxf6QxQICwv6k4g0Cxf7o1QgCwv788gMCxf6UxAICwv644Q0Cxf7s1AgCwv7w8QMCxf6oywICwv684A0Cxf6g5AgCwv60gQMCxf7s2gICwv7w9w0Cxf6k6wgCwv7IhwMCxf7g2QICwv709g0CpP7A0wgCp/7UiAMCpP6MwgICp/6Q/w0CxZyXFwLa2PfxDgLK45bJDgKB+bDUBgK8ieCDBAL1/+iCDgKu7bWvDQKwwfErArLs44sIAviBtpYJAvew4YEIAtDTsp4CAszTju0MAs6svqoLAsys6uYMAvba4Z0FArmvpvUGAs7ti4gOAsusltYEArDBtZoGArLsp7oOAviB8qcPAvewpbAOAtDT9q8EAszTytwKAs6s+psNAsysrtcKAvbapawDArmv4kQCzu3PuQgCy6zS5wICsMHJ9Q4Csuzb1QYC+IGOyAcC97DZ3wYC0NOKwAwCzNO2swICzqyG9AUCzKzSuAIC9trZwwsCua+eqwgCzu2zVgLLrK6ICgKwwY3kBAKy7J/EDAL4gcrZDQL3sJ3ODALQ087RBgLM0/KiCALOrMLlDwLMrJapCAL22p3SAQK5r9q6AgLO7ffHCgLLrOoZAs77v4UEAs7769wGAs37v4UEAs3769wGAsz7v4UEAsz769wGAtP7v4UEAtP769wGAuSR2akNAri30awHApygiaAIAujisM0EArq4h9kDAoPu8KYOAvrz0P0GAtv6zKMEArHY28AFAuKXp80FAsiPtFgCuYbL4QECgMzUgQgCgJWzsAECiY/mqwECwfPZ5A4C+YrK/gQC0YH/5AoC34iC9w0C/vqGrgUCndX2zgICjJSLpAwCvPGQzgoCwY79jAcC3o79jAcC3479jAcCxI6Zng4CgsTs8gICuseNzQ4Clpjj8gICnozCwQcCxI6Vng4CgsTg8gICuseBzQ4Clpjv8gICnozOwQcC46K4jA8C46K8jA8C0rS6xg4CsIqruQEC0rS+xw4CsIqvuAEC54u10woCy+yLrgEC+syslgMC/vTingYCv6L/tAEC+OyotQ8Coufdrg8Cyd2n/QrfRRlE6P8Gp0Yg5zK7bd9ubR+dBQ=='
}},function (error, response,body) {
if (!error && response.statusCode == 200) {
	const $ = cheerio.load(body);
	const rubleRow = $('#rb tr').eq(2);
	console.log('***------------------------***');
	console.log(`\tBank: ${rubleRow.find('td.bank').text().trim()}`);
      	console.log(`\tPrice: ${rubleRow.find('td').eq(9).text().trim()}`);
	console.log(`\tTime: ${rubleRow.find('td.date').text().trim()}`);}
	console.log('***------------------------***\n\n\n');
	t = setTimeout(getRuble,60000);
  });
}
t = setTimeout(getRuble,0);
