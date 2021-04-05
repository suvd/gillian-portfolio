<?php
/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return [
    // Global settings
    '*' => [
        // Default Week Start Day (0 = Sunday, 1 = Monday...)
        'defaultWeekStartDay' => 1,

        // Whether generated URLs should omit "index.php"
        'omitScriptNameInUrls' => true,

        // Control Panel trigger word
        'cpTrigger' => 'admin',

        // The secure key Craft will use for hashing and encrypting data
        'securityKey' => getenv('SECURITY_KEY'),

        // Whether to save the project config out to config/project.yaml
        // (see https://docs.craftcms.com/v3/project-config.html)
        'useProjectConfigFile' => true,

        // Whether the GraphQL API is enabled
        'enableGql' => false,

        'useEmailAsUsername' => true,
        'generateTransformsBeforePageLoad' => true,

        // Chrome started logging out when switching to responsive mode in devtools
        'requireMatchingUserAgentForSession' => false,

        // By default caches are regenerated daily. This busts cache when content is changed.
        'cacheDuration' => false,

        // Make search work with partial matches and not just full matches
        'defaultSearchTermOptions' => array(
            'subLeft' => true,
            'subRight' => true,
        ),

        // 'siteUrl' => [
        //     'en_us' => getenv('PRIMARY_SITE_URL'),
        // ],

        'aliases' => [
            '@baseUrl' => getenv('PRIMARY_SITE_URL'),
            '@assetBaseUrl' => getenv('PRIMARY_SITE_URL').'/assets/',
            '@assetBasePath' => dirname(__DIR__).'/web/assets/',
        ],

        'resourceBasePath' => dirname(__DIR__) . '/web/cpresources',
    ],

    // Dev environment settings
    'dev' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => true,
        // Set this to `false` to prevent administrative changes from being made on dev
        'allowAdminChanges' => true,

        'enableTemplateCaching' => false,
    ],

    // Staging environment settings
    'staging' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => false,
        // Set this to `false` to prevent administrative changes from being made on staging
        'allowAdminChanges' => false,

        'enableTemplateCaching' => false,
    ],

    // Production environment settings
    'production' => [
        // Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
        'devMode' => false,
        // Set this to `false` to prevent administrative changes from being made on production
        'allowAdminChanges' => false,
    ],
];
