<?php
/**
 * Mero Music functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package mero_music
 */

if ( ! function_exists( 'mero_music_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 * 
	 * 
	 */
function delete_post_type(){
	unregister_post_type( 'about_us' );
}
add_action('init','delete_post_type');



add_filter( 'rest_allow_anonymous_comments', '__return_true' );




function profile_post_type() {
$supports = array(
'title', // post title
'position',
'index',
'editor', // post content
'author', // post author
'thumbnail', // featured images
'excerpt', // post excerpt
'custom-fields', // custom fields
'comments', // post comments
'revisions', // post revisions
'post-formats', // post formats



);

$labels = array(
'name' => _x('Profiles', 'plural'),
'singular_name' => _x('Profile', 'singular'),
'menu_name' => _x('Profiles', 'admin menu'),
'name_admin_bar' => _x('Profiles', 'admin bar'),
'add_new' => _x('Add New Profile', 'add new'),
'add_new_item' => __('Add New profile'),
'new_item' => __('New Profile'),
'edit_item' => __('Edit Profile'),
'view_item' => __('View Profile'),
'all_items' => __('All Profiles'),
'search_items' => __('Search Profiles'),
'not_found' => __('No results found.'),
);

$args = array(
'supports' => $supports,
'labels' => $labels,
'public' => true,
'publicly_queryable' => true,
'capability_type'    => 'post',
'query_var' => true,
'rewrite' => array('slug' => 'profiles'),
'has_archive' => true,
'hierarchical' => false,
'show_in_rest' => true,
"show_ui" => true,
"delete_with_user" => false,
	"show_in_menu" => true,
	"show_in_nav_menus" => true,
'rest_controller_class' => 'WP_REST_Posts_Controller',
'rest_base'             => 'profiles-api',
);

register_post_type('profiles', $args);
}
add_action('init', 'profile_post_type');

function add_custom_fields() {
register_rest_field(
'profiles', 
'custom_fields', //New Field Name in JSON RESPONSEs
array(
    'get_callback'    => 'get_custom_fields', // custom function name 
    'update_callback' => null,
    'schema'          => null,
     )
);
}
add_action( 'rest_api_init', 'add_custom_fields' );


// function get_custom_fields( $object, $field_name, $request ) {
// //your code goes here
// return $customfieldvalue;
// }
	function mero_music_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Mero Music, use a find and replace
		 * to change 'mero-music' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'mero-music', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary_menu' 		=> esc_html__( 'Primary Menu', 'mero-music' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'mero_music_custom_background_args', array(
			'default-color' => '242424',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );

		/*
		* This theme styles the visual editor to resemble the theme style,
		* specifically font, colors, icons, and column width.
		*/
		add_editor_style( array( '/assets/css/editor-style.css', mero_music_fonts_url() ) );

		// Gutenberg support
		add_theme_support( 'editor-color-palette', array(
	       	array(
				'name' => esc_html__( 'Blue', 'mero-music' ),
				'slug' => 'blue',
				'color' => '#2c7dfa',
	       	),
	       	array(
	           	'name' => esc_html__( 'Green', 'mero-music' ),
	           	'slug' => 'green',
	           	'color' => '#07d79c',
	       	),
	       	array(
	           	'name' => esc_html__( 'Orange', 'mero-music' ),
	           	'slug' => 'orange',
	           	'color' => '#ff8737',
	       	),
	       	array(
	           	'name' => esc_html__( 'Black', 'mero-music' ),
	           	'slug' => 'black',
	           	'color' => '#2f3633',
	       	),
	       	array(
	           	'name' => esc_html__( 'Grey', 'mero-music' ),
	           	'slug' => 'grey',
	           	'color' => '#82868b',
	       	),
	   	));

		add_theme_support( 'align-wide' );
		add_theme_support( 'editor-font-sizes', array(
		   	array(
		       	'name' => esc_html__( 'small', 'mero-music' ),
		       	'shortName' => esc_html__( 'S', 'mero-music' ),
		       	'size' => 12,
		       	'slug' => 'small'
		   	),
		   	array(
		       	'name' => esc_html__( 'regular', 'mero-music' ),
		       	'shortName' => esc_html__( 'M', 'mero-music' ),
		       	'size' => 16,
		       	'slug' => 'regular'
		   	),
		   	array(
		       	'name' => esc_html__( 'larger', 'mero-music' ),
		       	'shortName' => esc_html__( 'L', 'mero-music' ),
		       	'size' => 36,
		       	'slug' => 'larger'
		   	),
		   	array(
		       	'name' => esc_html__( 'huge', 'mero-music' ),
		       	'shortName' => esc_html__( 'XL', 'mero-music' ),
		       	'size' => 48,
		       	'slug' => 'huge'
		   	)
		));
		add_theme_support('editor-styles');
		add_theme_support( 'wp-block-styles' );
	}
endif;
add_action( 'after_setup_theme', 'mero_music_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function mero_music_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'mero_music_content_width', 790 );
}
add_action( 'after_setup_theme', 'mero_music_content_width', 0 );

/**
 * Register custom fonts.
 */
function mero_music_fonts_url() {
	$fonts_url = '';
	$fonts     = array();
	$subsets   = 'latin,latin-ext';

	/* translators: If there are characters in your language that are not supported by Montserrat, translate this to 'off'. Do not translate into your own language. */
	if ( 'off' !== _x( 'on', 'Lato font: on or off', 'mero-music' ) ) {
		$fonts[] = 'Lato:400,700';
	}

	if ( 'off' !== _x( 'on', 'Montserrat font: on or off', 'mero-music' ) ) {
		$fonts[] = 'Montserrat:300,400,500,600,700';
	}

	if ( $fonts ) {
		$fonts_url = add_query_arg( array(
			'family' => urlencode( implode( '|', $fonts ) ),
			'subset' => urlencode( $subsets ),
		),  'https://fonts.googleapis.com/css' );
	}

	return esc_url_raw( $fonts_url );
}

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function mero_music_widgets_init() {
	register_sidebar( 
		array(
			'name'          => esc_html__( 'Sidebar', 'mero-music' ),
			'id'            => 'sidebar-1',
			'description'   => esc_html__( 'Add widgets here.', 'mero-music' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s"><div class="container">',
			'after_widget'  => '</div></section>',
			'before_title'  => '<div class="widget-header"><h2 class="widget-title">',
			'after_title'   => '</h2></div>',
		) 
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer 1', 'mero-music' ),
			'id'            => 'footer-1',
			'description'   => __( 'Add widgets here to appear in your footer.', 'mero-music' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s"><div class="container">',
			'after_widget'  => '</div></section>',
			'before_title'  => '<div class="widget-header"><h2 class="widget-title">',
			'after_title'   => '</h2></div>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer 2', 'mero-music' ),
			'id'            => 'footer-2',
			'description'   => __( 'Add widgets here to appear in your footer.', 'mero-music' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s"><div class="container">',
			'after_widget'  => '</div></section>',
			'before_title'  => '<div class="widget-header"><h2 class="widget-title">',
			'after_title'   => '</h2></div>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer 3', 'mero-music' ),
			'id'            => 'footer-3',
			'description'   => __( 'Add widgets here to appear in your footer.', 'mero-music' ),
			'before_widget' => '<section id="%1$s" class="widget %2$s"><div class="container">',
			'after_widget'  => '</div></section>',
			'before_title'  => '<div class="widget-header"><h2 class="widget-title">',
			'after_title'   => '</h2></div>',
		)
	);
}
add_action( 'widgets_init', 'mero_music_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function mero_music_scripts() {
	$fonts_url = mero_music_fonts_url();

	if ( ! empty( $fonts_url ) ) {
		wp_enqueue_style( 'mero-music-google-fonts', $fonts_url, array(), null );
	}

	wp_enqueue_style( 'mero-music-blocks', get_template_directory_uri() . '/assets/css/blocks.css' );

	wp_enqueue_style( 'mero-music-style', get_stylesheet_uri() );
	
	wp_enqueue_script( 'mero-music-skip-link-focus-fix', get_template_directory_uri() . '/assets/js/skip-link-focus-fix.js', array(), '20151215', true );

	wp_enqueue_script( 'mero-music-navigation', get_template_directory_uri() . '/assets/js/navigation.js', array('jquery'), '1.0', true );
	
	$mero_music_l10n = array(
		'quote'          => mero_music_get_svg( array( 'icon' => 'angle-down' ) ),
		'expand'         => esc_html__( 'Expand child menu', 'mero-music' ),
		'collapse'       => esc_html__( 'Collapse child menu', 'mero-music' ),
		'icon'           => mero_music_get_svg( array( 'icon' => 'angle-down', 'fallback' => true ) ),
	);
	
	wp_localize_script( 'mero-music-navigation', 'mero_music_l10n', $mero_music_l10n );

	wp_enqueue_script('imagesloaded');
	
	wp_enqueue_script( 'jquery-packery', get_template_directory_uri() . '/assets/js/packery.pkgd.js', array(), 'v2.1.2', true );

	wp_enqueue_script( 'mero-music-custom-script', get_template_directory_uri() . '/assets/js/custom.js', array('jquery'), '20151215', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'mero_music_scripts' );

/**
 * Enqueue editor styles for Gutenberg
 *
 * @since Mero Music 1.0.0
 */
function mero_music_block_editor_styles() {
	// Block styles.
	wp_enqueue_style( 'mero-music-block-editor-style', get_theme_file_uri( '/assets/css/editor-blocks.css' ) );
	// Add custom fonts.
	wp_enqueue_style( 'mero-music-fonts', mero_music_fonts_url(), array(), null );
}
add_action( 'enqueue_block_editor_assets', 'mero_music_block_editor_styles' );

/**
 * Removing category text from category page.
 */
function mero_music_category_title( $title ) {
    if ( is_category() ) {
        $title = single_cat_title( '', false );
    }
    return $title;
}
add_filter( 'get_the_archive_title', 'mero_music_category_title' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * SVG icons functions and filters.
 */
require get_template_directory() . '/inc/icon-functions.php';