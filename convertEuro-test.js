function assert(message, expr){
	if(!expr){
		output(false, message);
		throw new Error(message);
	}
	output(true, message);
}

function output(result, message){
	var p = document.createElement('p');
	message += result ? ' : SUCCESS' : ' : FAILURE';
	p.style.color = result ? '#0c0' : '#c00';
	p.innerHTML = message;
	document.body.appendChild(p);
}

function testcase(message, tests){
	var total = 0;
	var succeed = 0;
	var hasSetup = typeof tests.setUp == 'function';
	var hasTeardown = typeof tests.tearDown == 'function';
	var p = document.createElement('p');
	p.innerHTML = message;
	document.body.appendChild(p);
	for(test in tests){
		if(test != 'setUp' && test != 'tearDown'){
			total++;
		}
		try{
			if(hasSetup){
				tests.setUp();
			}
			tests[test]();
			if(test != 'setUp' && test != 'tearDown'){
				succeed++;
			}
			if(hasTeardown){
				tests.tearDown();
			}
		}catch(err){		
		}
	}
	var p = document.createElement('p');
	p.innerHTML = 'succeed tests ' + succeed + '/' + total ;
	document.body.appendChild(p);
}

testcase('i convert euro to usd', {
	'setUp' : function(){
		this.currency = 'USD';
	},
	'i test with one euro' : function(){
		assert('1€ should return 1,3$', convertEuro(1, this.currency) == 1.3);
	},
	'i test with two euros' : function(){
		assert('2€ should return 2,6$', convertEuro(2, this.currency) == 2.6);		
	}
})

testcase('i convert euro to gbp', {
	'setUp' : function(){
		this.currency = 'GBP';
	},
	'i test with one euro' : function(){
		assert('1€ should return 0,87£', convertEuro(1, this.currency) == 0.87);
	},
	'i test with two euros' : function(){
		assert('2€ should return 1,74£', convertEuro(2, this.currency) == 1.74);
	}
})

testcase('i convert euro to jpy', {
	'setUp' : function(){
		this.currency = 'JPY';
	},
	'i test with one euro' : function(){
		assert('1€ should return 124,77¥', convertEuro(1, this.currency) == 124.77);
	},
	'i test with two euros' : function(){
		assert('2€ should return 249,56¥', convertEuro(2, this.currency) == 249.56);
	}
})

testcase('i try with currency not handled by the function', {
	'i try with NZD' : function() {
		var messsage;
		try{
			convertEuro(1, 'NZD')
		} catch(err){
			message = err;
		}
		assert('convert euro to nzd should throw error', message = 'Currency not handled');
	}
})

