class { 'apt':
  always_apt_update => true
}

apt::source { 'erlang':
  location   => 'http://packages.erlang-solutions.com/debian',
  repos      => 'contrib',
  key        => 'A14F4FCA',
  key_server => 'pgp.mit.edu'
}

$riak_build_deps = [
  'git',
  'erlang',
  'build-essential',
  'libncurses5-dev',
  'openssl',
  'libssl-dev',
  'libssl0.9.8',
  'default-jdk',
  'libpam0g-dev'
]
Package { ensure => "installed" }
package { $riak_build_deps: }


vcsrepo { '/opt/riak':
  ensure => latest,
  provider => git,
  source => 'https://github.com/basho/riak.git',
  revision => 'develop'
}

vcsrepo { '/vagrant/source/riak_control':
  ensure => latest,
  provider => git,
  source => "https://github.com/basho/riak_control.git",
  revision => 'develop'
}

exec { 'riak-control-dep':
  command => '/bin/mkdir -p /opt/riak/deps;
              /bin/ln -s /vagrant/source/riak_control /opt/riak/deps',
  user => root
}

exec { 'riak-make-stagerel':
  command => '/usr/bin/make stagedevrel',
  cwd => '/opt/riak',
  require => Exec['riak-control-dep'],
  user => root
}

exec { 'turn-on-riak-control':
  command => '/bin/sed -i "/riak_control = off/c\riak_control = on." ./riak.conf',
  cwd => '/opt/riak/dev/dev1/etc',
  require => Exec['riak-make-stagerel'],
  user => root
}

exec { 'start-riak':
  command => '/bin/sh ./dev1/bin/riak start;
              /bin/sh ./dev2/bin/riak start;
              /bin/sh ./dev3/bin/riak start;
              /bin/sh ./dev4/bin/riak start;
              /bin/sh ./dev5/bin/riak start;
              /bin/sh ./dev2/bin/riak-admin cluster join dev1@127.0.0.1;
              /bin/sh ./dev3/bin/riak-admin cluster join dev1@127.0.0.1;
              /bin/sh ./dev4/bin/riak-admin cluster join dev1@127.0.0.1;
              /bin/sh ./dev5/bin/riak-admin cluster join dev1@127.0.0.1;
              /bin/sh ./dev1/bin/riak-admin cluser commit;',
  cwd => '/opt/riak/dev',
  require => Exec['turn-on-riak-control'],
  user => root
}



