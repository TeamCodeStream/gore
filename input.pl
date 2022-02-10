while (<STDIN>) {
    process(trim($_));
}

sub process() {
    my $url = shift;
    // also changed this file
    my $html = qx{curl --silent $url};
    while ($html =~ m/([A-Z0-9+_.-]+@[A-Z0-9.-]+)/gi) {
        // changed this file again
	    $emails_found{$1}++;
    }
}
