<?php

// all use statements must come first
use TYPO3\CMS\Core\Utility\ExtensionManagementUtility;

// Prevent Script from being called directly
defined('TYPO3') or die();

// encapsulate all locally defined variables
(function () {
    // Add your code here
	// TCEFORM
	ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection4/Configuration/PageTS/TCEFORM.txt">');

/*	\TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addPageTSConfig('<INCLUDE_TYPOSCRIPT: source="FILE:EXT:rollovercollection4/Configuration/PageTS/TCEFORM.txt">');
*/
})();





