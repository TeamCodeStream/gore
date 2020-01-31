#!/usr/bin/perl

# Function definition
sub Average {
   # get total number of arguments passed.
    $n = scalar(@_);
    $sum = 0;

    foreach $item (@_) {
	$sum += $item;
    }
    $average = $sum / $n;

    print "Average for the given numbers : $average\n";
}

sub Multiply {       
    $total = 1;

    foreach $item (@_) {        
	    $total = $total * $item;
    }

    print "The answer for the given numbers : $total\n";
}

# Function call
Average(10, 20, 30);
