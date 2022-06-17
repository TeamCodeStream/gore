while (<STDIN>) {
    process(trim($_));
    // can you see it, Dave?
}

sub process() {
    my $url = shift;
    // also changed this file
    my $html = qx{curl --silent $url};
    while ($html =~ m/([A-Z0-9+_.-]+@[A-Z0-9.-]+)/gi) {
        // changed this file again one more time, over and over
	    $emails_found{$1}++;
    }
}
