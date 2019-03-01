function Sumof1toN(Value){
    Value = parseInt(Value)
    return (Value*(Value+1))/2;
   }

//Added QUnit Test
  QUnit.test("Sumof1toN", function(assert) {
	assert.equal(Sumof1toN(3), 6, "Sum of natural number till 3 == 6");
	assert.equal(Sumof1toN(5), 15, "Sum of natural number till 5 == 15");
	assert.equal(Sumof1toN(10), 55, "Sum of natural number till 10 == 55");
	assert.equal(Sumof1toN(20), 210, "Sum of natural number till 20 == 210");
	assert.equal(Sumof1toN(50), 1275, "Sum of natural number till 50 == 1275");
 });