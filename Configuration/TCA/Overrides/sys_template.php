<?php

declare(strict_types=1);

use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') or die();

// For sites still configured with TypoScript records (sys_template).
// Sites using site sets add the set "Rollovercollection 4 - BLOCKS" instead.
ExtensionManagementUtility::addStaticFile(
    'rollovercollection4',
    'Configuration/TypoScript',
    'Rollovercollection 4 - BLOCKS'
);
