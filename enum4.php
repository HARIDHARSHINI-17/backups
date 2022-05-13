<?php
enum Suit
{
    case Hearts;
    case Diamonds;
    case Clubs;
    case Spades;
}
$a = Suit::Spades;
$b = Suit::Spades;

$a === $b; // true

$a instanceof Suit;

?>
