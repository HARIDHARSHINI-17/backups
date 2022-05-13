<?php
class Customer
{
	public $name;

	public function getName()
	{
		return $this->name;
	}
}

$customer = new Customer();
$customer->name = 'Hari';
echo $customer->getName(); 
?>