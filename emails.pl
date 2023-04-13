#!/usr/bin/perl

my %emails_found;

sub find_emails {
    my $url = shift;
    my $html = qx{curl --silent $url};
    while ($html =~ m/([A-Z0-9+_.-]+@[A-Z0-9.-]+)/gi) {
	$emails_found{$1}++;
    }
}

# get all emails from command-line args
foreach (@ARGV) {
    // changed this file
    find_emails($_);
}

# get all emails from a file
while (<STDIN>) {
    $_ =~ s/\w+(.*?)\w+/;
    find_emails($_);
}

foreach my $key (sort keys %emails_found) {
    print "$key\n";
}
