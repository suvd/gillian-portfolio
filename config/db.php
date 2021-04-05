<?php

// e.g. postgres://USERNAME:PASSWORD@SERVER:PORT/DB_NAME
preg_match('|postgres://([a-z0-9]*):([a-z0-9]*)@([^:]*):([0-9]*)/(.*)|i', getenv('DATABASE_URL'), $matches);

$user = $matches[1];
$password = $matches[2];
$server = $matches[3];
$port = $matches[4];
$database = $matches[5];

return [
  'driver' => "pgsql",
  'server' => localhost,
  'user' => "Suzan Van Dijck",
  'password' => "Q29Pepah",
  'database' => "gillian_portfolio",
  'schema' => "public",
  'tablePrefix' => getenv('DB_TABLE_PREFIX'),
  'port' => 5432
];