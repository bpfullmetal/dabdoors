<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'garage' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '>sgT$p;*/ohk*hM&60|zuvyI@n]K=&HpVt3H4Lb*TOmsLGZ5yR-6;IT;9kRs %X{' );
define( 'SECURE_AUTH_KEY',  '&vaH)?$]JyqzfvO%#lb08aQc<5<Ef~Bb1T$1P$v~p-U82|tk=*,E?m[VC]tgwit7' );
define( 'LOGGED_IN_KEY',    'M{0+3y9r]@Tc8}%E[tcXtNHrCj6URtCH(JMWVV)#i>pXd>ug90Lux}Y+DDS>1O*!' );
define( 'NONCE_KEY',        '+J< zd_l9StUCK)JL<kpPtu0KO PF{}ii:sXKE:xvV{PP]g?k~$B=1^bcK0}w@1r' );
define( 'AUTH_SALT',        'YS2w8L9^^PXPtV.G{B}%?I0)-&Kx#MXT(8[@E;x^P+B Y%fZyNI[&.C^S^FNvQ+I' );
define( 'SECURE_AUTH_SALT', 'O4][}XGY?q8yW+nb[-,``IHDK@bqL]hf5J!UW!FKGg{^?|f,IDwINZ+u{s=/bdVQ' );
define( 'LOGGED_IN_SALT',   '@N>z%mNmBOpGb!5Vy|BtP{rO,tb+Vs2+KwBDshL^bh@d`92xdb XV!8I}C*_)^(5' );
define( 'NONCE_SALT',       '4R tbfkV]E!J-z]>P5*F!O*@u)AL%>-N+q7KnCFKFT,LZ^;M?/yU,+6Kwp*oc&Pp' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'mObSBQSD';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
