while (<STDIN>) {
    process(trim($_));
}


//sub process comment
sub process() {
    my $url = shift;
    my $html = qx{curl --silent $url};
    while ($html =~ m/([A-Z0-9+_.-]+@[A-Z0-9.-]+)/gi) {
	$emails_found{$1}++;
    }
}
