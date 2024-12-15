<?php

// all use statements must come first
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

defined('TYPO3') or die();

(function () {

        \TYPO3\CMS\Extbase\Utility\ExtensionUtility::registerPlugin(
            'Rollovercollection4',
            'Rollovereffect4',
            'rollovereffect4'
        );

        \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addStaticFile('rollovercollection4', 'Configuration/TypoScript', 'BLOCKS');
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('rollovercollection4', 'constants', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection4/Configuration/TypoScript/constants.typoscript>"');
	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTypoScript('rollovercollection4', 'setup', '<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection4/Configuration/TypoScript/setup.typoscript>"');

  // Add your code here
})();


