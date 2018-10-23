
# This file contains all the default variable settings for the sandbox.
# These settings should work on every developer's machine upon installation.

# There are 3 sandbox related variables that are pre-defined prior to
# sourcing in this file. They are:
#
#  GORE_NAME     Name of the installed sandbox (installation specific)
#  GORE_TOP      Path up to and including the sandbox's primary git project
#         (eg. this file is GORE_TOP/sandbox/defaults.sh)
#  GORE_SANDBOX  Path to the root directory of the sandbox tree

# Installation options
if [ -f "$GORE_SANDBOX/sb.options" ]; then
	echo "Loading extra params from sb.options"
	. $GORE_SANDBOX/sb.options
	export `grep ^GORE_ $GORE_SANDBOX/sb.options|cut -f1 -d=`
fi

# Uncomment and setup if yarn is required. Available versions can be seen
# with the command:
#   ssh $DT_CLOUD_SERVER ls /home/web/SandboxRepos/software/yarn-$DT_OS_TYPE-*
# export GORE_YARN=true
# export GORE_YARN_VER=latest
# export PATH=$GORE_SANDBOX/yarn/bin:$PATH


# Uncomment and setup if node is required. Available versions can be seen
# with the command:
#   ssh $DT_CLOUD_SERVER ls /home/web/SandboxRepos/software/node-$DT_OS_TYPE-*
# export GORE_NODE_VER=latest
# export PATH=$GORE_SANDBOX/node/bin:$GORE_TOP/node_modules/.bin:$PATH

# Uncomment if you want to short circuit the sandbox hooks (see hooks/git_hooks.sh)
# export GORE_DISABLE_GIT_HOOKS=1

# Add sandbox utilities to the search path
export PATH=$GORE_TOP/bin:$PATH

# Standard variables to consider using
export GORE_LOGS=$GORE_SANDBOX/log    # Log directory
export GORE_TMP=$GORE_SANDBOX/tmp     # temp directory
export GORE_CONFS=$GORE_SANDBOX/conf  # config files directory
export GORE_DATA=$GORE_SANDBOX/data   # data directory
export GORE_PIDS=$GORE_SANDBOX/pid    # pid files directory
[ -z "$GORE_ASSET_ENV" ] && export GORE_ASSET_ENV=local
