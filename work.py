#!/usr/bin/env python3

import argparse

parser = argparse.ArgumentParser(description='Do some more work')
parser.add_argument('--debug', action='store_true', default=False, help='show debugging output')
parser.add_argument('--it', action='store_true', default=False, help="work it")
args = parser.parse_args()

if not args.it:
    parser.print_help()
    exit(1)

print("work work work....all I do is work.")
exit(0)
