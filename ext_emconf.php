<?php

$EM_CONF[$_EXTKEY] = [
    'title' => 'image rollover collection 4 - BLOCKS',
    'description' => 'BLOCKS: multicolumn rendering with seven box layouts for the content elements textmedia, media, textpic and image. Requires bootstrap_package (Bootstrap 5). Useful for menus, galleries and teasers. Highly customizable.',
    'category' => 'fe',
    'version' => '9.0.0',
    'state' => 'stable',
    'author' => 'Giulia Tuveri',
    'author_email' => 'gt@specialistaweb.it',
    'author_company' => 'Specialistaweb',
    'constraints' => [
        'depends' => [
            'php' => '8.2.0-8.5.99',
            'typo3' => '13.4.0-14.4.99',
            'bootstrap_package' => '16.0.0-16.99.99',
        ],
        'conflicts' => [],
        'suggests' => [],
    ],
];
