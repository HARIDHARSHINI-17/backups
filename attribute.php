<?php
#[MyAttribute(value: 1234)]
class Thing
{
    
}

function dumpAttributeData($reflection) {
    $attributes = $reflection->getAttributes();

    foreach ($attributes as $attribute) {
        var_dump($attribute->getName());
        var_dump($attribute->getArguments());

    }
}

dumpAttributeData(new ReflectionClass(Thing::class));
?>