<?php

// e.g. postgres://USERNAME:PASSWORD@SERVER:PORT/DB_NAME

$url = getenv('DATABASE_URL');

$dbparts = parse_url($url);

return [
  'driver' => "pgsql",
  'server' => $dbparts['host'],
  'user' => $dbparts['user'],
  'password' => $dbparts['pass'],
  'database' => ltrim($dbparts['path'],'/'),
  'schema' => "public",
  'tablePrefix' => 'craft',
  'port' => $dbparts['port'],
];