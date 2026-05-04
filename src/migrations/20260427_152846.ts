import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-d1-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_hero_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_hero_links_order_idx\` ON \`pages_hero_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_hero_links_parent_id_idx\` ON \`pages_hero_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_hero_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_hero_links_locales_locale_parent_id_unique\` ON \`pages_hero_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_u_s_ps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_hero_u_s_ps_order_idx\` ON \`pages_hero_u_s_ps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_hero_u_s_ps_parent_id_idx\` ON \`pages_hero_u_s_ps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_hero_u_s_ps_icon_idx\` ON \`pages_hero_u_s_ps\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_u_s_ps_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_hero_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_hero_u_s_ps_locales_locale_parent_id_unique\` ON \`pages_hero_u_s_ps_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_stats_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_hero_stats_items_order_idx\` ON \`pages_hero_stats_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_hero_stats_items_parent_id_idx\` ON \`pages_hero_stats_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_stats_items_locales\` (
  	\`title\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_hero_stats_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_hero_stats_items_locales_locale_parent_id_unique\` ON \`pages_hero_stats_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_tabs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_hero_tabs_order_idx\` ON \`pages_hero_tabs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_hero_tabs_parent_id_idx\` ON \`pages_hero_tabs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_hero_tabs_image_idx\` ON \`pages_hero_tabs\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_hero_tabs_locales\` (
  	\`title\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_hero_tabs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_hero_tabs_locales_locale_parent_id_unique\` ON \`pages_hero_tabs_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_links_order_idx\` ON \`pages_blocks_feature_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_links_parent_id_idx\` ON \`pages_blocks_feature_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_feature_links_locales_locale_parent_id_unique\` ON \`pages_blocks_feature_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_metrics_order_idx\` ON \`pages_blocks_feature_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_metrics_parent_id_idx\` ON \`pages_blocks_feature_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_metrics_locales\` (
  	\`title\` text,
  	\`subline\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_metrics\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_feature_metrics_locales_locale_parent_id_unique\` ON \`pages_blocks_feature_metrics_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_u_s_ps_u_s_p_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_u_s_p_features_order_idx\` ON \`pages_blocks_feature_u_s_ps_u_s_p_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_u_s_p_features_parent_id_idx\` ON \`pages_blocks_feature_u_s_ps_u_s_p_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_u_s_ps_u_s_p_features_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_u_s_ps_u_s_p_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_feature_u_s_ps_u_s_p_features_locales_locale_pa\` ON \`pages_blocks_feature_u_s_ps_u_s_p_features_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_u_s_ps_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_links_order_idx\` ON \`pages_blocks_feature_u_s_ps_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_links_parent_id_idx\` ON \`pages_blocks_feature_u_s_ps_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_u_s_ps_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_u_s_ps_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_feature_u_s_ps_links_locales_locale_parent_id_u\` ON \`pages_blocks_feature_u_s_ps_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_u_s_ps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`usp_icon\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_order_idx\` ON \`pages_blocks_feature_u_s_ps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_parent_id_idx\` ON \`pages_blocks_feature_u_s_ps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_u_s_ps_image_idx\` ON \`pages_blocks_feature_u_s_ps\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_u_s_ps_locales\` (
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_feature_u_s_ps_locales_locale_parent_id_unique\` ON \`pages_blocks_feature_u_s_ps_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'FEATURE1',
  	\`icon\` text,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_order_idx\` ON \`pages_blocks_feature\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_parent_id_idx\` ON \`pages_blocks_feature\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_path_idx\` ON \`pages_blocks_feature\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_feature_image_idx\` ON \`pages_blocks_feature\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_feature_locales\` (
  	\`badge\` text,
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_feature_locales_locale_parent_id_unique\` ON \`pages_blocks_feature_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`form_id\` integer,
  	\`enable_intro\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_order_idx\` ON \`pages_blocks_form_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_parent_id_idx\` ON \`pages_blocks_form_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_path_idx\` ON \`pages_blocks_form_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_form_idx\` ON \`pages_blocks_form_block\` (\`form_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_block_locales\` (
  	\`intro_content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_form_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_form_block_locales_locale_parent_id_unique\` ON \`pages_blocks_form_block_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_links_order_idx\` ON \`pages_blocks_cta_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_links_parent_id_idx\` ON \`pages_blocks_cta_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_cta_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_cta_links_locales_locale_parent_id_unique\` ON \`pages_blocks_cta_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'CTA1',
  	\`icon\` text,
  	\`image_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_order_idx\` ON \`pages_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_parent_id_idx\` ON \`pages_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_path_idx\` ON \`pages_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_image_idx\` ON \`pages_blocks_cta\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_locales\` (
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_cta_locales_locale_parent_id_unique\` ON \`pages_blocks_cta_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logos_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logos_testimonials_order_idx\` ON \`pages_blocks_logos_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logos_testimonials_parent_id_idx\` ON \`pages_blocks_logos_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logos_testimonials_image_idx\` ON \`pages_blocks_logos_testimonials\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logos_testimonials_locales\` (
  	\`quote\` text,
  	\`name\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logos_testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_logos_testimonials_locales_locale_parent_id_uni\` ON \`pages_blocks_logos_testimonials_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'LOGOS1',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logos_order_idx\` ON \`pages_blocks_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logos_parent_id_idx\` ON \`pages_blocks_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logos_path_idx\` ON \`pages_blocks_logos\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logos_locales\` (
  	\`rich_text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_logos_locales_locale_parent_id_unique\` ON \`pages_blocks_logos_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_about_counter\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`title\` text,
  	\`description\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_about\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_about_counter_order_idx\` ON \`pages_blocks_about_counter\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_about_counter_parent_id_idx\` ON \`pages_blocks_about_counter\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_about\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_about_order_idx\` ON \`pages_blocks_about\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_about_parent_id_idx\` ON \`pages_blocks_about\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_about_path_idx\` ON \`pages_blocks_about\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_about_locales\` (
  	\`headline\` text,
  	\`text1\` text,
  	\`text2\` text,
  	\`text3\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_about\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_about_locales_locale_parent_id_unique\` ON \`pages_blocks_about_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_contact_blocks\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_blocks_order_idx\` ON \`pages_blocks_contact_contact_blocks\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_contact_blocks_parent_id_idx\` ON \`pages_blocks_contact_contact_blocks\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_contact_blocks_locales\` (
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact_contact_blocks\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_contact_contact_blocks_locales_locale_parent_id\` ON \`pages_blocks_contact_contact_blocks_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_maps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`iframe\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_maps_order_idx\` ON \`pages_blocks_contact_maps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_maps_parent_id_idx\` ON \`pages_blocks_contact_maps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'CONTACT1',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_order_idx\` ON \`pages_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_parent_id_idx\` ON \`pages_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_contact_path_idx\` ON \`pages_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_contact_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_contact_locales_locale_parent_id_unique\` ON \`pages_blocks_contact_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_elements\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`image_height\` text DEFAULT '21rem',
  	\`icon\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_elements_order_idx\` ON \`pages_blocks_gallery_elements\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_elements_parent_id_idx\` ON \`pages_blocks_gallery_elements\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_elements_image_idx\` ON \`pages_blocks_gallery_elements\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_elements_locales\` (
  	\`rich_text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery_elements\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_gallery_elements_locales_locale_parent_id_uniqu\` ON \`pages_blocks_gallery_elements_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'GALLERY4',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_order_idx\` ON \`pages_blocks_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_parent_id_idx\` ON \`pages_blocks_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_gallery_path_idx\` ON \`pages_blocks_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_gallery_locales\` (
  	\`rich_text\` text,
  	\`tagline\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_gallery_locales_locale_parent_id_unique\` ON \`pages_blocks_gallery_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonial_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_links_order_idx\` ON \`pages_blocks_testimonial_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_links_parent_id_idx\` ON \`pages_blocks_testimonial_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonial_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonial_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_testimonial_links_locales_locale_parent_id_uniq\` ON \`pages_blocks_testimonial_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonial_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`author_avatar_id\` integer,
  	\`icon_id\` integer,
  	\`rating\` numeric,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`author_avatar_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_testimonial_order_idx\` ON \`pages_blocks_testimonial_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_testimonial_parent_id_idx\` ON \`pages_blocks_testimonial_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_testimonial_author_avatar_idx\` ON \`pages_blocks_testimonial_testimonial\` (\`author_avatar_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_testimonial_icon_idx\` ON \`pages_blocks_testimonial_testimonial\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonial_testimonial_locales\` (
  	\`author_name\` text,
  	\`author_description\` text,
  	\`text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonial_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_testimonial_testimonial_locales_locale_parent_i\` ON \`pages_blocks_testimonial_testimonial_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'TESTIMONIAL2',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_order_idx\` ON \`pages_blocks_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_parent_id_idx\` ON \`pages_blocks_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_testimonial_path_idx\` ON \`pages_blocks_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_testimonial_locales\` (
  	\`headline\` text,
  	\`tagline\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_testimonial_locales_locale_parent_id_unique\` ON \`pages_blocks_testimonial_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_faqs_order_idx\` ON \`pages_blocks_faq_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_faqs_parent_id_idx\` ON \`pages_blocks_faq_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_faqs_locales\` (
  	\`question\` text,
  	\`answer\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq_faqs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_faq_faqs_locales_locale_parent_id_unique\` ON \`pages_blocks_faq_faqs_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text,
  	\`callout_link_type\` text DEFAULT 'reference',
  	\`callout_link_new_tab\` integer,
  	\`callout_link_section\` text,
  	\`callout_link_icon_before\` text,
  	\`callout_link_icon_after\` text,
  	\`callout_link_appearance\` text DEFAULT 'default',
  	\`callout_link_size\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_order_idx\` ON \`pages_blocks_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_parent_id_idx\` ON \`pages_blocks_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_faq_path_idx\` ON \`pages_blocks_faq\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_faq_locales\` (
  	\`badge\` text DEFAULT 'FAQ',
  	\`headline\` text,
  	\`callout_text\` text,
  	\`callout_link_url\` text,
  	\`callout_link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_faq_locales_locale_parent_id_unique\` ON \`pages_blocks_faq_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stat_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`icon_color\` text DEFAULT 'black',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stat\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_stats_order_idx\` ON \`pages_blocks_stat_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_stats_parent_id_idx\` ON \`pages_blocks_stat_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stat_stats_locales\` (
  	\`counter\` text,
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stat_stats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_stat_stats_locales_locale_parent_id_unique\` ON \`pages_blocks_stat_stats_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stat_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stat\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_links_order_idx\` ON \`pages_blocks_stat_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_links_parent_id_idx\` ON \`pages_blocks_stat_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stat_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stat_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_stat_links_locales_locale_parent_id_unique\` ON \`pages_blocks_stat_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stat\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'STAT1',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_order_idx\` ON \`pages_blocks_stat\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_parent_id_idx\` ON \`pages_blocks_stat\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stat_path_idx\` ON \`pages_blocks_stat\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stat_locales\` (
  	\`headline\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stat\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_stat_locales_locale_parent_id_unique\` ON \`pages_blocks_stat_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_text_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_text\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_links_order_idx\` ON \`pages_blocks_text_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_links_parent_id_idx\` ON \`pages_blocks_text_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_text_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_text_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_text_links_locales_locale_parent_id_unique\` ON \`pages_blocks_text_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`size\` text DEFAULT 'oneThird',
  	\`background_color\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_order_idx\` ON \`pages_blocks_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_parent_id_idx\` ON \`pages_blocks_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_path_idx\` ON \`pages_blocks_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_text_locales\` (
  	\`content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_text\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_text_locales_locale_parent_id_unique\` ON \`pages_blocks_text_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_media_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`size\` text DEFAULT 'oneThird',
  	\`background_color\` text,
  	\`media_id\` integer,
  	\`aspect_ratio\` text DEFAULT '16/9',
  	\`block_name\` text,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_block_order_idx\` ON \`pages_blocks_media_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_block_parent_id_idx\` ON \`pages_blocks_media_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_block_path_idx\` ON \`pages_blocks_media_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_media_block_media_idx\` ON \`pages_blocks_media_block\` (\`media_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_media_block_locales\` (
  	\`caption\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_media_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_media_block_locales_locale_parent_id_unique\` ON \`pages_blocks_media_block_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_block_2\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`size\` text DEFAULT 'oneThird',
  	\`form_id\` integer,
  	\`enable_intro\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_2_order_idx\` ON \`pages_blocks_form_block_2\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_2_parent_id_idx\` ON \`pages_blocks_form_block_2\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_2_path_idx\` ON \`pages_blocks_form_block_2\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_form_block_2_form_idx\` ON \`pages_blocks_form_block_2\` (\`form_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_form_block_2_locales\` (
  	\`intro_content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_form_block_2\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_form_block_2_locales_locale_parent_id_unique\` ON \`pages_blocks_form_block_2_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_split_view\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_split_view_order_idx\` ON \`pages_blocks_split_view\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_split_view_parent_id_idx\` ON \`pages_blocks_split_view\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_split_view_path_idx\` ON \`pages_blocks_split_view\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_customblock\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`custom_block_type\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_customblock_order_idx\` ON \`pages_blocks_customblock\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_customblock_parent_id_idx\` ON \`pages_blocks_customblock\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_customblock_path_idx\` ON \`pages_blocks_customblock\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_changelog_entries\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`date\` text,
  	\`version\` text,
  	\`github_id\` text,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_changelog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_changelog_entries_order_idx\` ON \`pages_blocks_changelog_entries\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_changelog_entries_parent_id_idx\` ON \`pages_blocks_changelog_entries\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_changelog_entries_image_idx\` ON \`pages_blocks_changelog_entries\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_changelog\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`design_version\` text,
  	\`fetch_from_github\` integer,
  	\`github_settings_repository\` text,
  	\`github_settings_github_token\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_changelog_order_idx\` ON \`pages_blocks_changelog\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_changelog_parent_id_idx\` ON \`pages_blocks_changelog\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_changelog_path_idx\` ON \`pages_blocks_changelog\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_changelog_locales\` (
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_changelog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_changelog_locales_locale_parent_id_unique\` ON \`pages_blocks_changelog_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_links_order_idx\` ON \`pages_blocks_blog_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_links_parent_id_idx\` ON \`pages_blocks_blog_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_blog_links_locales_locale_parent_id_unique\` ON \`pages_blocks_blog_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`design_version\` text DEFAULT 'BLOG29',
  	\`populate_by\` text DEFAULT 'collection',
  	\`post_collection\` text DEFAULT 'posts',
  	\`limit\` numeric DEFAULT 3,
  	\`sort_field\` text DEFAULT 'publishedAt',
  	\`sort_order\` text DEFAULT 'desc',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_order_idx\` ON \`pages_blocks_blog\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_parent_id_idx\` ON \`pages_blocks_blog\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_path_idx\` ON \`pages_blocks_blog\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_blog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_blog_locales_locale_parent_id_unique\` ON \`pages_blocks_blog_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_banner_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_links_order_idx\` ON \`pages_blocks_banner_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_links_parent_id_idx\` ON \`pages_blocks_banner_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_banner_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_banner_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_banner_links_locales_locale_parent_id_unique\` ON \`pages_blocks_banner_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'BANNER1',
  	\`position\` text DEFAULT 'TOP',
  	\`default_visible\` integer DEFAULT true,
  	\`icon\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_order_idx\` ON \`pages_blocks_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_parent_id_idx\` ON \`pages_blocks_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_banner_path_idx\` ON \`pages_blocks_banner\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_banner_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_banner_locales_locale_parent_id_unique\` ON \`pages_blocks_banner_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_casestudies_slides_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`src_id\` integer,
  	\`position\` numeric,
  	FOREIGN KEY (\`src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_casestudies_slides\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_slides_images_order_idx\` ON \`pages_blocks_casestudies_slides_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_slides_images_parent_id_idx\` ON \`pages_blocks_casestudies_slides_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_slides_images_src_idx\` ON \`pages_blocks_casestudies_slides_images\` (\`src_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_casestudies_slides\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`content\` text,
  	\`logo_id\` integer,
  	\`logo_class\` text DEFAULT 'h-6 md:h-8',
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_casestudies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_slides_order_idx\` ON \`pages_blocks_casestudies_slides\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_slides_parent_id_idx\` ON \`pages_blocks_casestudies_slides\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_slides_logo_idx\` ON \`pages_blocks_casestudies_slides\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_casestudies\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'CASESTUDIES5',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_order_idx\` ON \`pages_blocks_casestudies\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_parent_id_idx\` ON \`pages_blocks_casestudies\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_casestudies_path_idx\` ON \`pages_blocks_casestudies\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_timeline_sections\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_sections_order_idx\` ON \`pages_blocks_timeline_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_sections_parent_id_idx\` ON \`pages_blocks_timeline_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_sections_image_idx\` ON \`pages_blocks_timeline_sections\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_timeline_sections_locales\` (
  	\`date\` text,
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_timeline_sections\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_timeline_sections_locales_locale_parent_id_uniq\` ON \`pages_blocks_timeline_sections_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'TIMELINE2',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_order_idx\` ON \`pages_blocks_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_parent_id_idx\` ON \`pages_blocks_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_timeline_path_idx\` ON \`pages_blocks_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_timeline_locales\` (
  	\`heading\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_blocks_timeline_locales_locale_parent_id_unique\` ON \`pages_blocks_timeline_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_signup\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`design_version\` text DEFAULT 'SIGNUP4',
  	\`google_signup_enabled\` integer DEFAULT true,
  	\`facebook_signup_enabled\` integer DEFAULT false,
  	\`apple_signup_enabled\` integer DEFAULT false,
  	\`heading\` text DEFAULT 'Signup',
  	\`subheading\` text DEFAULT 'Create a new account',
  	\`signup_text\` text DEFAULT 'Create an account',
  	\`login_text\` text DEFAULT 'Already have an account?',
  	\`google_text\` text DEFAULT 'Sign up with Google',
  	\`facebook_text\` text DEFAULT 'Sign up with Facebook',
  	\`apple_text\` text DEFAULT 'Sign up with Apple',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_signup_order_idx\` ON \`pages_blocks_signup\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_signup_parent_id_idx\` ON \`pages_blocks_signup\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_signup_path_idx\` ON \`pages_blocks_signup\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_login\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`design_version\` text DEFAULT 'LOGIN3',
  	\`signup_enabled\` integer DEFAULT true,
  	\`google_login_enabled\` integer DEFAULT true,
  	\`facebook_login_enabled\` integer DEFAULT false,
  	\`apple_login_enabled\` integer DEFAULT false,
  	\`heading\` text DEFAULT 'Login',
  	\`subheading\` text DEFAULT 'Welcome back',
  	\`login_text\` text DEFAULT 'Log in',
  	\`google_text\` text DEFAULT 'Log in with Google',
  	\`dont_have_account_text\` text DEFAULT 'Don''t have an account?',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_login_order_idx\` ON \`pages_blocks_login\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_login_parent_id_idx\` ON \`pages_blocks_login\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_login_path_idx\` ON \`pages_blocks_login\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_breadcrumbs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`doc_id\` integer,
  	\`url\` text,
  	\`label\` text,
  	FOREIGN KEY (\`doc_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_order_idx\` ON \`pages_breadcrumbs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_parent_id_idx\` ON \`pages_breadcrumbs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_locale_idx\` ON \`pages_breadcrumbs\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`pages_breadcrumbs_doc_idx\` ON \`pages_breadcrumbs\` (\`doc_id\`);`)
  await db.run(sql`CREATE TABLE \`pages\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`hero_background_color\` text,
  	\`hero_design_version\` text DEFAULT 'none',
  	\`hero_badge_icon\` text,
  	\`hero_badge_link_type\` text DEFAULT 'reference',
  	\`hero_badge_link_new_tab\` integer,
  	\`hero_badge_link_section\` text,
  	\`hero_badge_link_icon_before\` text,
  	\`hero_badge_link_icon_after\` text,
  	\`hero_button_link_type\` text DEFAULT 'reference',
  	\`hero_button_link_new_tab\` integer,
  	\`hero_button_link_section\` text,
  	\`hero_rating\` numeric,
  	\`published_at\` text,
  	\`slug\` text,
  	\`slug_lock\` integer DEFAULT true,
  	\`enable_breadcrumbs\` integer DEFAULT false,
  	\`parent_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_slug_idx\` ON \`pages\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`pages_parent_idx\` ON \`pages\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_updated_at_idx\` ON \`pages\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`pages_created_at_idx\` ON \`pages\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`pages__status_idx\` ON \`pages\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`pages_locales\` (
  	\`hero_badge\` text,
  	\`hero_tagline\` text,
  	\`hero_badge_link_url\` text,
  	\`hero_button_link_url\` text,
  	\`hero_button_link_label\` text,
  	\`hero_rich_text\` text,
  	\`hero_pricing_headline\` text,
  	\`hero_pricing_price\` text,
  	\`hero_pricing_description\` text,
  	\`hero_presentation_video_label\` text DEFAULT 'Presentation Video',
  	\`hero_presentation_video_video_duration\` text DEFAULT '2 min',
  	\`hero_presentation_video_video_url\` text DEFAULT 'https://library.shadcnblocks.com/videos/block/landscape.mp4',
  	\`meta_title\` text,
  	\`meta_image_id\` integer,
  	\`meta_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_meta_meta_image_idx\` ON \`pages_locales\` (\`meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`pages_locales_locale_parent_id_unique\` ON \`pages_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`media_id\` integer,
  	\`categories_id\` integer,
  	\`posts_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_rels_order_idx\` ON \`pages_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_parent_idx\` ON \`pages_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_path_idx\` ON \`pages_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_pages_id_idx\` ON \`pages_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_media_id_idx\` ON \`pages_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_categories_id_idx\` ON \`pages_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_rels_posts_id_idx\` ON \`pages_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_links_order_idx\` ON \`_pages_v_version_hero_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_links_parent_id_idx\` ON \`_pages_v_version_hero_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_version_hero_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_version_hero_links_locales_locale_parent_id_unique\` ON \`_pages_v_version_hero_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_u_s_ps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_u_s_ps_order_idx\` ON \`_pages_v_version_hero_u_s_ps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_u_s_ps_parent_id_idx\` ON \`_pages_v_version_hero_u_s_ps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_u_s_ps_icon_idx\` ON \`_pages_v_version_hero_u_s_ps\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_u_s_ps_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_version_hero_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_version_hero_u_s_ps_locales_locale_parent_id_unique\` ON \`_pages_v_version_hero_u_s_ps_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_stats_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_stats_items_order_idx\` ON \`_pages_v_version_hero_stats_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_stats_items_parent_id_idx\` ON \`_pages_v_version_hero_stats_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_stats_items_locales\` (
  	\`title\` text,
  	\`value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_version_hero_stats_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_version_hero_stats_items_locales_locale_parent_id_u\` ON \`_pages_v_version_hero_stats_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_tabs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_tabs_order_idx\` ON \`_pages_v_version_hero_tabs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_tabs_parent_id_idx\` ON \`_pages_v_version_hero_tabs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_hero_tabs_image_idx\` ON \`_pages_v_version_hero_tabs\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_hero_tabs_locales\` (
  	\`title\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_version_hero_tabs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_version_hero_tabs_locales_locale_parent_id_unique\` ON \`_pages_v_version_hero_tabs_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_links_order_idx\` ON \`_pages_v_blocks_feature_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_links_parent_id_idx\` ON \`_pages_v_blocks_feature_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_feature_links_locales_locale_parent_id_uniqu\` ON \`_pages_v_blocks_feature_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_metrics\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_metrics_order_idx\` ON \`_pages_v_blocks_feature_metrics\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_metrics_parent_id_idx\` ON \`_pages_v_blocks_feature_metrics\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_metrics_locales\` (
  	\`title\` text,
  	\`subline\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_metrics\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_feature_metrics_locales_locale_parent_id_uni\` ON \`_pages_v_blocks_feature_metrics_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_u_s_ps_u_s_p_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_u_s_p_features_order_idx\` ON \`_pages_v_blocks_feature_u_s_ps_u_s_p_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_u_s_p_features_parent_id_idx\` ON \`_pages_v_blocks_feature_u_s_ps_u_s_p_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_u_s_ps_u_s_p_features_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_u_s_ps_u_s_p_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_feature_u_s_ps_u_s_p_features_locales_locale\` ON \`_pages_v_blocks_feature_u_s_ps_u_s_p_features_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_u_s_ps_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_links_order_idx\` ON \`_pages_v_blocks_feature_u_s_ps_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_links_parent_id_idx\` ON \`_pages_v_blocks_feature_u_s_ps_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_u_s_ps_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_u_s_ps_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_feature_u_s_ps_links_locales_locale_parent_i\` ON \`_pages_v_blocks_feature_u_s_ps_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_u_s_ps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`usp_icon\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_order_idx\` ON \`_pages_v_blocks_feature_u_s_ps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_parent_id_idx\` ON \`_pages_v_blocks_feature_u_s_ps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_u_s_ps_image_idx\` ON \`_pages_v_blocks_feature_u_s_ps\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_u_s_ps_locales\` (
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature_u_s_ps\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_feature_u_s_ps_locales_locale_parent_id_uniq\` ON \`_pages_v_blocks_feature_u_s_ps_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'FEATURE1',
  	\`icon\` text,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_order_idx\` ON \`_pages_v_blocks_feature\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_parent_id_idx\` ON \`_pages_v_blocks_feature\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_path_idx\` ON \`_pages_v_blocks_feature\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_feature_image_idx\` ON \`_pages_v_blocks_feature\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_feature_locales\` (
  	\`badge\` text,
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_feature\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_feature_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_feature_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`form_id\` integer,
  	\`enable_intro\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_order_idx\` ON \`_pages_v_blocks_form_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_parent_id_idx\` ON \`_pages_v_blocks_form_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_path_idx\` ON \`_pages_v_blocks_form_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_form_idx\` ON \`_pages_v_blocks_form_block\` (\`form_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_block_locales\` (
  	\`intro_content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_form_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_form_block_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_form_block_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_links_order_idx\` ON \`_pages_v_blocks_cta_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_links_parent_id_idx\` ON \`_pages_v_blocks_cta_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_cta_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_cta_links_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_cta_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'CTA1',
  	\`icon\` text,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_order_idx\` ON \`_pages_v_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_parent_id_idx\` ON \`_pages_v_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_path_idx\` ON \`_pages_v_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_image_idx\` ON \`_pages_v_blocks_cta\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta_locales\` (
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_cta_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_cta_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_logos_testimonials\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_logos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logos_testimonials_order_idx\` ON \`_pages_v_blocks_logos_testimonials\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logos_testimonials_parent_id_idx\` ON \`_pages_v_blocks_logos_testimonials\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logos_testimonials_image_idx\` ON \`_pages_v_blocks_logos_testimonials\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_logos_testimonials_locales\` (
  	\`quote\` text,
  	\`name\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_logos_testimonials\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_logos_testimonials_locales_locale_parent_id_\` ON \`_pages_v_blocks_logos_testimonials_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'LOGOS1',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logos_order_idx\` ON \`_pages_v_blocks_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logos_parent_id_idx\` ON \`_pages_v_blocks_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logos_path_idx\` ON \`_pages_v_blocks_logos\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_logos_locales\` (
  	\`rich_text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_logos\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_logos_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_logos_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_about_counter\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`value\` text,
  	\`title\` text,
  	\`description\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_about\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_about_counter_order_idx\` ON \`_pages_v_blocks_about_counter\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_about_counter_parent_id_idx\` ON \`_pages_v_blocks_about_counter\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_about\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_about_order_idx\` ON \`_pages_v_blocks_about\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_about_parent_id_idx\` ON \`_pages_v_blocks_about\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_about_path_idx\` ON \`_pages_v_blocks_about\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_about_locales\` (
  	\`headline\` text,
  	\`text1\` text,
  	\`text2\` text,
  	\`text3\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_about\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_about_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_about_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_contact_blocks\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_blocks_order_idx\` ON \`_pages_v_blocks_contact_contact_blocks\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_contact_blocks_parent_id_idx\` ON \`_pages_v_blocks_contact_contact_blocks\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_contact_blocks_locales\` (
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contact_contact_blocks\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_contact_contact_blocks_locales_locale_parent\` ON \`_pages_v_blocks_contact_contact_blocks_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_maps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`iframe\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_maps_order_idx\` ON \`_pages_v_blocks_contact_maps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_maps_parent_id_idx\` ON \`_pages_v_blocks_contact_maps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'CONTACT1',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_order_idx\` ON \`_pages_v_blocks_contact\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_parent_id_idx\` ON \`_pages_v_blocks_contact\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_contact_path_idx\` ON \`_pages_v_blocks_contact\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_contact_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_contact\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_contact_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_contact_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_elements\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`image_height\` text DEFAULT '21rem',
  	\`icon\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_elements_order_idx\` ON \`_pages_v_blocks_gallery_elements\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_elements_parent_id_idx\` ON \`_pages_v_blocks_gallery_elements\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_elements_image_idx\` ON \`_pages_v_blocks_gallery_elements\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_elements_locales\` (
  	\`rich_text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery_elements\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_gallery_elements_locales_locale_parent_id_un\` ON \`_pages_v_blocks_gallery_elements_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'GALLERY4',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_order_idx\` ON \`_pages_v_blocks_gallery\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_parent_id_idx\` ON \`_pages_v_blocks_gallery\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_gallery_path_idx\` ON \`_pages_v_blocks_gallery\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_gallery_locales\` (
  	\`rich_text\` text,
  	\`tagline\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_gallery\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_gallery_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_gallery_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_testimonial_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_links_order_idx\` ON \`_pages_v_blocks_testimonial_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_links_parent_id_idx\` ON \`_pages_v_blocks_testimonial_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_testimonial_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_testimonial_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_testimonial_links_locales_locale_parent_id_u\` ON \`_pages_v_blocks_testimonial_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_testimonial_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`author_avatar_id\` integer,
  	\`icon_id\` integer,
  	\`rating\` numeric,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`author_avatar_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`icon_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_testimonial_order_idx\` ON \`_pages_v_blocks_testimonial_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_testimonial_parent_id_idx\` ON \`_pages_v_blocks_testimonial_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_testimonial_author_avatar_idx\` ON \`_pages_v_blocks_testimonial_testimonial\` (\`author_avatar_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_testimonial_icon_idx\` ON \`_pages_v_blocks_testimonial_testimonial\` (\`icon_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_testimonial_testimonial_locales\` (
  	\`author_name\` text,
  	\`author_description\` text,
  	\`text\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_testimonial_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_testimonial_testimonial_locales_locale_paren\` ON \`_pages_v_blocks_testimonial_testimonial_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_testimonial\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'TESTIMONIAL2',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_order_idx\` ON \`_pages_v_blocks_testimonial\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_parent_id_idx\` ON \`_pages_v_blocks_testimonial\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_testimonial_path_idx\` ON \`_pages_v_blocks_testimonial\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_testimonial_locales\` (
  	\`headline\` text,
  	\`tagline\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_testimonial\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_testimonial_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_testimonial_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_faq_faqs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_faq_faqs_order_idx\` ON \`_pages_v_blocks_faq_faqs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_faq_faqs_parent_id_idx\` ON \`_pages_v_blocks_faq_faqs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_faq_faqs_locales\` (
  	\`question\` text,
  	\`answer\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_faq_faqs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_faq_faqs_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_faq_faqs_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_faq\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text,
  	\`callout_link_type\` text DEFAULT 'reference',
  	\`callout_link_new_tab\` integer,
  	\`callout_link_section\` text,
  	\`callout_link_icon_before\` text,
  	\`callout_link_icon_after\` text,
  	\`callout_link_appearance\` text DEFAULT 'default',
  	\`callout_link_size\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_faq_order_idx\` ON \`_pages_v_blocks_faq\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_faq_parent_id_idx\` ON \`_pages_v_blocks_faq\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_faq_path_idx\` ON \`_pages_v_blocks_faq\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_faq_locales\` (
  	\`badge\` text DEFAULT 'FAQ',
  	\`headline\` text,
  	\`callout_text\` text,
  	\`callout_link_url\` text,
  	\`callout_link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_faq\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_faq_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_faq_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stat_stats\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`icon_color\` text DEFAULT 'black',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stat\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_stats_order_idx\` ON \`_pages_v_blocks_stat_stats\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_stats_parent_id_idx\` ON \`_pages_v_blocks_stat_stats\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stat_stats_locales\` (
  	\`counter\` text,
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stat_stats\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_stat_stats_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_stat_stats_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stat_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stat\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_links_order_idx\` ON \`_pages_v_blocks_stat_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_links_parent_id_idx\` ON \`_pages_v_blocks_stat_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stat_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stat_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_stat_links_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_stat_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stat\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'STAT1',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_order_idx\` ON \`_pages_v_blocks_stat\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_parent_id_idx\` ON \`_pages_v_blocks_stat\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stat_path_idx\` ON \`_pages_v_blocks_stat\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stat_locales\` (
  	\`headline\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stat\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_stat_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_stat_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_text_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_text\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_links_order_idx\` ON \`_pages_v_blocks_text_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_links_parent_id_idx\` ON \`_pages_v_blocks_text_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_text_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_text_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_text_links_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_text_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`size\` text DEFAULT 'oneThird',
  	\`background_color\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_order_idx\` ON \`_pages_v_blocks_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_parent_id_idx\` ON \`_pages_v_blocks_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_path_idx\` ON \`_pages_v_blocks_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_text_locales\` (
  	\`content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_text\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_text_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_text_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_media_block\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`size\` text DEFAULT 'oneThird',
  	\`background_color\` text,
  	\`media_id\` integer,
  	\`aspect_ratio\` text DEFAULT '16/9',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_block_order_idx\` ON \`_pages_v_blocks_media_block\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_block_parent_id_idx\` ON \`_pages_v_blocks_media_block\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_block_path_idx\` ON \`_pages_v_blocks_media_block\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_media_block_media_idx\` ON \`_pages_v_blocks_media_block\` (\`media_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_media_block_locales\` (
  	\`caption\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_media_block\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_media_block_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_media_block_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_block_2\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`size\` text DEFAULT 'oneThird',
  	\`form_id\` integer,
  	\`enable_intro\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_2_order_idx\` ON \`_pages_v_blocks_form_block_2\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_2_parent_id_idx\` ON \`_pages_v_blocks_form_block_2\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_2_path_idx\` ON \`_pages_v_blocks_form_block_2\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_form_block_2_form_idx\` ON \`_pages_v_blocks_form_block_2\` (\`form_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_form_block_2_locales\` (
  	\`intro_content\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_form_block_2\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_form_block_2_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_form_block_2_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_split_view\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_split_view_order_idx\` ON \`_pages_v_blocks_split_view\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_split_view_parent_id_idx\` ON \`_pages_v_blocks_split_view\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_split_view_path_idx\` ON \`_pages_v_blocks_split_view\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_customblock\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`custom_block_type\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_customblock_order_idx\` ON \`_pages_v_blocks_customblock\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_customblock_parent_id_idx\` ON \`_pages_v_blocks_customblock\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_customblock_path_idx\` ON \`_pages_v_blocks_customblock\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_changelog_entries\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`date\` text,
  	\`version\` text,
  	\`github_id\` text,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_changelog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_changelog_entries_order_idx\` ON \`_pages_v_blocks_changelog_entries\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_changelog_entries_parent_id_idx\` ON \`_pages_v_blocks_changelog_entries\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_changelog_entries_image_idx\` ON \`_pages_v_blocks_changelog_entries\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_changelog\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`design_version\` text,
  	\`fetch_from_github\` integer,
  	\`github_settings_repository\` text,
  	\`github_settings_github_token\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_changelog_order_idx\` ON \`_pages_v_blocks_changelog\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_changelog_parent_id_idx\` ON \`_pages_v_blocks_changelog\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_changelog_path_idx\` ON \`_pages_v_blocks_changelog\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_changelog_locales\` (
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_changelog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_changelog_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_changelog_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_blog_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_blog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_links_order_idx\` ON \`_pages_v_blocks_blog_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_links_parent_id_idx\` ON \`_pages_v_blocks_blog_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_blog_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_blog_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_blog_links_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_blog_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_blog\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`design_version\` text DEFAULT 'BLOG29',
  	\`populate_by\` text DEFAULT 'collection',
  	\`post_collection\` text DEFAULT 'posts',
  	\`limit\` numeric DEFAULT 3,
  	\`sort_field\` text DEFAULT 'publishedAt',
  	\`sort_order\` text DEFAULT 'desc',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_order_idx\` ON \`_pages_v_blocks_blog\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_parent_id_idx\` ON \`_pages_v_blocks_blog\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_path_idx\` ON \`_pages_v_blocks_blog\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_blog_locales\` (
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_blog\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_blog_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_blog_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_banner_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_links_order_idx\` ON \`_pages_v_blocks_banner_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_links_parent_id_idx\` ON \`_pages_v_blocks_banner_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_banner_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_banner_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_banner_links_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_banner_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'BANNER1',
  	\`position\` text DEFAULT 'TOP',
  	\`default_visible\` integer DEFAULT true,
  	\`icon\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_order_idx\` ON \`_pages_v_blocks_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_parent_id_idx\` ON \`_pages_v_blocks_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_banner_path_idx\` ON \`_pages_v_blocks_banner\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_banner_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_banner_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_banner_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_casestudies_slides_images\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`src_id\` integer,
  	\`position\` numeric,
  	\`_uuid\` text,
  	FOREIGN KEY (\`src_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_casestudies_slides\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_slides_images_order_idx\` ON \`_pages_v_blocks_casestudies_slides_images\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_slides_images_parent_id_idx\` ON \`_pages_v_blocks_casestudies_slides_images\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_slides_images_src_idx\` ON \`_pages_v_blocks_casestudies_slides_images\` (\`src_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_casestudies_slides\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`content\` text,
  	\`logo_id\` integer,
  	\`logo_class\` text DEFAULT 'h-6 md:h-8',
  	\`_uuid\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_casestudies\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_slides_order_idx\` ON \`_pages_v_blocks_casestudies_slides\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_slides_parent_id_idx\` ON \`_pages_v_blocks_casestudies_slides\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_slides_logo_idx\` ON \`_pages_v_blocks_casestudies_slides\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_casestudies\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'CASESTUDIES5',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_order_idx\` ON \`_pages_v_blocks_casestudies\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_parent_id_idx\` ON \`_pages_v_blocks_casestudies\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_casestudies_path_idx\` ON \`_pages_v_blocks_casestudies\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_timeline_sections\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_sections_order_idx\` ON \`_pages_v_blocks_timeline_sections\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_sections_parent_id_idx\` ON \`_pages_v_blocks_timeline_sections\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_sections_image_idx\` ON \`_pages_v_blocks_timeline_sections\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_timeline_sections_locales\` (
  	\`date\` text,
  	\`tagline\` text,
  	\`rich_text\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_timeline_sections\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_timeline_sections_locales_locale_parent_id_u\` ON \`_pages_v_blocks_timeline_sections_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_timeline\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT 'TIMELINE2',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_order_idx\` ON \`_pages_v_blocks_timeline\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_parent_id_idx\` ON \`_pages_v_blocks_timeline\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_timeline_path_idx\` ON \`_pages_v_blocks_timeline\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_timeline_locales\` (
  	\`heading\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_timeline\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_blocks_timeline_locales_locale_parent_id_unique\` ON \`_pages_v_blocks_timeline_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_signup\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`design_version\` text DEFAULT 'SIGNUP4',
  	\`google_signup_enabled\` integer DEFAULT true,
  	\`facebook_signup_enabled\` integer DEFAULT false,
  	\`apple_signup_enabled\` integer DEFAULT false,
  	\`heading\` text DEFAULT 'Signup',
  	\`subheading\` text DEFAULT 'Create a new account',
  	\`signup_text\` text DEFAULT 'Create an account',
  	\`login_text\` text DEFAULT 'Already have an account?',
  	\`google_text\` text DEFAULT 'Sign up with Google',
  	\`facebook_text\` text DEFAULT 'Sign up with Facebook',
  	\`apple_text\` text DEFAULT 'Sign up with Apple',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_signup_order_idx\` ON \`_pages_v_blocks_signup\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_signup_parent_id_idx\` ON \`_pages_v_blocks_signup\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_signup_path_idx\` ON \`_pages_v_blocks_signup\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_login\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`design_version\` text DEFAULT 'LOGIN3',
  	\`signup_enabled\` integer DEFAULT true,
  	\`google_login_enabled\` integer DEFAULT true,
  	\`facebook_login_enabled\` integer DEFAULT false,
  	\`apple_login_enabled\` integer DEFAULT false,
  	\`heading\` text DEFAULT 'Login',
  	\`subheading\` text DEFAULT 'Welcome back',
  	\`login_text\` text DEFAULT 'Log in',
  	\`google_text\` text DEFAULT 'Log in with Google',
  	\`dont_have_account_text\` text DEFAULT 'Don''t have an account?',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_login_order_idx\` ON \`_pages_v_blocks_login\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_login_parent_id_idx\` ON \`_pages_v_blocks_login\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_login_path_idx\` ON \`_pages_v_blocks_login\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_version_breadcrumbs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`doc_id\` integer,
  	\`url\` text,
  	\`label\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`doc_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_order_idx\` ON \`_pages_v_version_breadcrumbs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_parent_id_idx\` ON \`_pages_v_version_breadcrumbs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_locale_idx\` ON \`_pages_v_version_breadcrumbs\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_breadcrumbs_doc_idx\` ON \`_pages_v_version_breadcrumbs\` (\`doc_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_hero_background_color\` text,
  	\`version_hero_design_version\` text DEFAULT 'none',
  	\`version_hero_badge_icon\` text,
  	\`version_hero_badge_link_type\` text DEFAULT 'reference',
  	\`version_hero_badge_link_new_tab\` integer,
  	\`version_hero_badge_link_section\` text,
  	\`version_hero_badge_link_icon_before\` text,
  	\`version_hero_badge_link_icon_after\` text,
  	\`version_hero_button_link_type\` text DEFAULT 'reference',
  	\`version_hero_button_link_new_tab\` integer,
  	\`version_hero_button_link_section\` text,
  	\`version_hero_rating\` numeric,
  	\`version_published_at\` text,
  	\`version_slug\` text,
  	\`version_slug_lock\` integer DEFAULT true,
  	\`version_enable_breadcrumbs\` integer DEFAULT false,
  	\`version_parent_id\` integer,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_parent_idx\` ON \`_pages_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_slug_idx\` ON \`_pages_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_parent_idx\` ON \`_pages_v\` (\`version_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_updated_at_idx\` ON \`_pages_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version_created_at_idx\` ON \`_pages_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_version_version__status_idx\` ON \`_pages_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_created_at_idx\` ON \`_pages_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_updated_at_idx\` ON \`_pages_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_snapshot_idx\` ON \`_pages_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_published_locale_idx\` ON \`_pages_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_latest_idx\` ON \`_pages_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_autosave_idx\` ON \`_pages_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_locales\` (
  	\`version_hero_badge\` text,
  	\`version_hero_tagline\` text,
  	\`version_hero_badge_link_url\` text,
  	\`version_hero_button_link_url\` text,
  	\`version_hero_button_link_label\` text,
  	\`version_hero_rich_text\` text,
  	\`version_hero_pricing_headline\` text,
  	\`version_hero_pricing_price\` text,
  	\`version_hero_pricing_description\` text,
  	\`version_hero_presentation_video_label\` text DEFAULT 'Presentation Video',
  	\`version_hero_presentation_video_video_duration\` text DEFAULT '2 min',
  	\`version_hero_presentation_video_video_url\` text DEFAULT 'https://library.shadcnblocks.com/videos/block/landscape.mp4',
  	\`version_meta_title\` text,
  	\`version_meta_image_id\` integer,
  	\`version_meta_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_version_meta_version_meta_image_idx\` ON \`_pages_v_locales\` (\`version_meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`_pages_v_locales_locale_parent_id_unique\` ON \`_pages_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`media_id\` integer,
  	\`categories_id\` integer,
  	\`posts_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_order_idx\` ON \`_pages_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_parent_idx\` ON \`_pages_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_path_idx\` ON \`_pages_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_pages_id_idx\` ON \`_pages_v_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_media_id_idx\` ON \`_pages_v_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_categories_id_idx\` ON \`_pages_v_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_rels_posts_id_idx\` ON \`_pages_v_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE TABLE \`posts_populated_authors\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_populated_authors_order_idx\` ON \`posts_populated_authors\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`posts_populated_authors_parent_id_idx\` ON \`posts_populated_authors\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`posts\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`banner_image_id\` integer,
  	\`design_version\` text DEFAULT 'BLOG18',
  	\`published_at\` text,
  	\`read_time\` numeric,
  	\`slug\` text,
  	\`slug_lock\` integer DEFAULT true,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`_status\` text DEFAULT 'draft',
  	FOREIGN KEY (\`banner_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_banner_image_idx\` ON \`posts\` (\`banner_image_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_slug_idx\` ON \`posts\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`posts_updated_at_idx\` ON \`posts\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`posts_created_at_idx\` ON \`posts\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`posts__status_idx\` ON \`posts\` (\`_status\`);`)
  await db.run(sql`CREATE TABLE \`posts_locales\` (
  	\`content\` text,
  	\`meta_title\` text,
  	\`meta_image_id\` integer,
  	\`meta_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_meta_meta_image_idx\` ON \`posts_locales\` (\`meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`posts_locales_locale_parent_id_unique\` ON \`posts_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`posts_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`posts_id\` integer,
  	\`categories_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`posts_rels_order_idx\` ON \`posts_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_parent_idx\` ON \`posts_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_path_idx\` ON \`posts_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_posts_id_idx\` ON \`posts_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_categories_id_idx\` ON \`posts_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`posts_rels_users_id_idx\` ON \`posts_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`_posts_v_version_populated_authors\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_posts_v_version_populated_authors_order_idx\` ON \`_posts_v_version_populated_authors\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_version_populated_authors_parent_id_idx\` ON \`_posts_v_version_populated_authors\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_posts_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`parent_id\` integer,
  	\`version_title\` text,
  	\`version_banner_image_id\` integer,
  	\`version_design_version\` text DEFAULT 'BLOG18',
  	\`version_published_at\` text,
  	\`version_read_time\` numeric,
  	\`version_slug\` text,
  	\`version_slug_lock\` integer DEFAULT true,
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`version__status\` text DEFAULT 'draft',
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`snapshot\` integer,
  	\`published_locale\` text,
  	\`latest\` integer,
  	\`autosave\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`version_banner_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`_posts_v_parent_idx\` ON \`_posts_v\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_version_version_banner_image_idx\` ON \`_posts_v\` (\`version_banner_image_id\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_version_version_slug_idx\` ON \`_posts_v\` (\`version_slug\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_version_version_updated_at_idx\` ON \`_posts_v\` (\`version_updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_version_version_created_at_idx\` ON \`_posts_v\` (\`version_created_at\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_version_version__status_idx\` ON \`_posts_v\` (\`version__status\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_created_at_idx\` ON \`_posts_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_updated_at_idx\` ON \`_posts_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_snapshot_idx\` ON \`_posts_v\` (\`snapshot\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_published_locale_idx\` ON \`_posts_v\` (\`published_locale\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_latest_idx\` ON \`_posts_v\` (\`latest\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_autosave_idx\` ON \`_posts_v\` (\`autosave\`);`)
  await db.run(sql`CREATE TABLE \`_posts_v_locales\` (
  	\`version_content\` text,
  	\`version_meta_title\` text,
  	\`version_meta_image_id\` integer,
  	\`version_meta_description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`version_meta_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_posts_v_version_meta_version_meta_image_idx\` ON \`_posts_v_locales\` (\`version_meta_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`_posts_v_locales_locale_parent_id_unique\` ON \`_posts_v_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_posts_v_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`posts_id\` integer,
  	\`categories_id\` integer,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`_posts_v\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_posts_v_rels_order_idx\` ON \`_posts_v_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_rels_parent_idx\` ON \`_posts_v_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_rels_path_idx\` ON \`_posts_v_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_rels_posts_id_idx\` ON \`_posts_v_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_rels_categories_id_idx\` ON \`_posts_v_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`_posts_v_rels_users_id_idx\` ON \`_posts_v_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`media\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alt\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`url\` text,
  	\`thumbnail_u_r_l\` text,
  	\`filename\` text,
  	\`mime_type\` text,
  	\`filesize\` numeric,
  	\`width\` numeric,
  	\`height\` numeric,
  	\`focal_x\` numeric,
  	\`focal_y\` numeric
  );
  `)
  await db.run(sql`CREATE INDEX \`media_updated_at_idx\` ON \`media\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`media_created_at_idx\` ON \`media\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`media_filename_idx\` ON \`media\` (\`filename\`);`)
  await db.run(sql`CREATE TABLE \`media_locales\` (
  	\`caption\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`media_locales_locale_parent_id_unique\` ON \`media_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`categories_breadcrumbs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`doc_id\` integer,
  	\`url\` text,
  	\`label\` text,
  	FOREIGN KEY (\`doc_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`categories_breadcrumbs_order_idx\` ON \`categories_breadcrumbs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`categories_breadcrumbs_parent_id_idx\` ON \`categories_breadcrumbs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`categories_breadcrumbs_locale_idx\` ON \`categories_breadcrumbs\` (\`_locale\`);`)
  await db.run(sql`CREATE INDEX \`categories_breadcrumbs_doc_idx\` ON \`categories_breadcrumbs\` (\`doc_id\`);`)
  await db.run(sql`CREATE TABLE \`categories\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`parent_id\` integer,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`categories_parent_idx\` ON \`categories\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`categories_updated_at_idx\` ON \`categories\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`categories_created_at_idx\` ON \`categories\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`users_sessions\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`created_at\` text,
  	\`expires_at\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sessions_order_idx\` ON \`users_sessions\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`users_sessions_parent_id_idx\` ON \`users_sessions\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`users\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`sub\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`email\` text NOT NULL,
  	\`reset_password_token\` text,
  	\`reset_password_expiration\` text,
  	\`salt\` text,
  	\`hash\` text,
  	\`login_attempts\` numeric DEFAULT 0,
  	\`lock_until\` text
  );
  `)
  await db.run(sql`CREATE INDEX \`users_sub_idx\` ON \`users\` (\`sub\`);`)
  await db.run(sql`CREATE INDEX \`users_updated_at_idx\` ON \`users\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`users_created_at_idx\` ON \`users\` (\`created_at\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`users_email_idx\` ON \`users\` (\`email\`);`)
  await db.run(sql`CREATE TABLE \`users_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`roles_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`roles_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`users_rels_order_idx\` ON \`users_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_parent_idx\` ON \`users_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_path_idx\` ON \`users_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`users_rels_roles_id_idx\` ON \`users_rels\` (\`roles_id\`);`)
  await db.run(sql`CREATE TABLE \`roles\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`slug\` text NOT NULL,
  	\`description\` text,
  	\`permissions_can_manage_content\` integer DEFAULT false,
  	\`permissions_can_publish\` integer DEFAULT false,
  	\`permissions_can_manage_users\` integer DEFAULT false,
  	\`permissions_can_manage_redirects\` integer DEFAULT false,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`roles_name_idx\` ON \`roles\` (\`name\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`roles_slug_idx\` ON \`roles\` (\`slug\`);`)
  await db.run(sql`CREATE INDEX \`roles_updated_at_idx\` ON \`roles\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`roles_created_at_idx\` ON \`roles\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`redirects\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`from\` text NOT NULL,
  	\`to_type\` text DEFAULT 'reference',
  	\`to_url\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`redirects_from_idx\` ON \`redirects\` (\`from\`);`)
  await db.run(sql`CREATE INDEX \`redirects_updated_at_idx\` ON \`redirects\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`redirects_created_at_idx\` ON \`redirects\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`redirects_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`posts_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`redirects_rels_order_idx\` ON \`redirects_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_parent_idx\` ON \`redirects_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_path_idx\` ON \`redirects_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_pages_id_idx\` ON \`redirects_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`redirects_rels_posts_id_idx\` ON \`redirects_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_checkbox\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`required\` integer,
  	\`default_value\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_checkbox_order_idx\` ON \`forms_blocks_checkbox\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_checkbox_parent_id_idx\` ON \`forms_blocks_checkbox\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_checkbox_path_idx\` ON \`forms_blocks_checkbox\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_checkbox_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_checkbox\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_checkbox_locales_locale_parent_id_unique\` ON \`forms_blocks_checkbox_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_country\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_country_order_idx\` ON \`forms_blocks_country\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_country_parent_id_idx\` ON \`forms_blocks_country\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_country_path_idx\` ON \`forms_blocks_country\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_country_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_country\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_country_locales_locale_parent_id_unique\` ON \`forms_blocks_country_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_email\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_email_order_idx\` ON \`forms_blocks_email\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_email_parent_id_idx\` ON \`forms_blocks_email\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_email_path_idx\` ON \`forms_blocks_email\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_email_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_email\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_email_locales_locale_parent_id_unique\` ON \`forms_blocks_email_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_message\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_message_order_idx\` ON \`forms_blocks_message\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_message_parent_id_idx\` ON \`forms_blocks_message\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_message_path_idx\` ON \`forms_blocks_message\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_message_locales\` (
  	\`message\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_message\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_message_locales_locale_parent_id_unique\` ON \`forms_blocks_message_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_number\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`default_value\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_number_order_idx\` ON \`forms_blocks_number\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_number_parent_id_idx\` ON \`forms_blocks_number\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_number_path_idx\` ON \`forms_blocks_number\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_number_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_number\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_number_locales_locale_parent_id_unique\` ON \`forms_blocks_number_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_select_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_select\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_options_order_idx\` ON \`forms_blocks_select_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_options_parent_id_idx\` ON \`forms_blocks_select_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_select_options_locales\` (
  	\`label\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_select_options\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_select_options_locales_locale_parent_id_unique\` ON \`forms_blocks_select_options_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_select\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`placeholder\` text,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_order_idx\` ON \`forms_blocks_select\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_parent_id_idx\` ON \`forms_blocks_select\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_select_path_idx\` ON \`forms_blocks_select\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_select_locales\` (
  	\`label\` text,
  	\`default_value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_select\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_select_locales_locale_parent_id_unique\` ON \`forms_blocks_select_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_state\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_state_order_idx\` ON \`forms_blocks_state\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_state_parent_id_idx\` ON \`forms_blocks_state\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_state_path_idx\` ON \`forms_blocks_state\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_state_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_state\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_state_locales_locale_parent_id_unique\` ON \`forms_blocks_state_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_text_order_idx\` ON \`forms_blocks_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_text_parent_id_idx\` ON \`forms_blocks_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_text_path_idx\` ON \`forms_blocks_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_text_locales\` (
  	\`label\` text,
  	\`default_value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_text\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_text_locales_locale_parent_id_unique\` ON \`forms_blocks_text_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_textarea\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text NOT NULL,
  	\`width\` numeric,
  	\`required\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_blocks_textarea_order_idx\` ON \`forms_blocks_textarea\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_textarea_parent_id_idx\` ON \`forms_blocks_textarea\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`forms_blocks_textarea_path_idx\` ON \`forms_blocks_textarea\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`forms_blocks_textarea_locales\` (
  	\`label\` text,
  	\`default_value\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_blocks_textarea\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_blocks_textarea_locales_locale_parent_id_unique\` ON \`forms_blocks_textarea_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_emails\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`email_to\` text,
  	\`cc\` text,
  	\`bcc\` text,
  	\`reply_to\` text,
  	\`email_from\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_emails_order_idx\` ON \`forms_emails\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`forms_emails_parent_id_idx\` ON \`forms_emails\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms_emails_locales\` (
  	\`subject\` text DEFAULT 'You''ve received a new message.' NOT NULL,
  	\`message\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms_emails\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_emails_locales_locale_parent_id_unique\` ON \`forms_emails_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`forms\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text NOT NULL,
  	\`confirmation_type\` text DEFAULT 'message',
  	\`redirect_url\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`forms_updated_at_idx\` ON \`forms\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`forms_created_at_idx\` ON \`forms\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`forms_locales\` (
  	\`submit_button_label\` text,
  	\`confirmation_message\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`forms_locales_locale_parent_id_unique\` ON \`forms_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`form_submissions_submission_data\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`field\` text NOT NULL,
  	\`value\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`form_submissions_submission_data_order_idx\` ON \`form_submissions_submission_data\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_submission_data_parent_id_idx\` ON \`form_submissions_submission_data\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`form_submissions\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`form_id\` integer NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`form_submissions_form_idx\` ON \`form_submissions\` (\`form_id\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_updated_at_idx\` ON \`form_submissions\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`form_submissions_created_at_idx\` ON \`form_submissions\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_kv\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text NOT NULL,
  	\`data\` text NOT NULL
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`payload_kv_key_idx\` ON \`payload_kv\` (\`key\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`global_slug\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_global_slug_idx\` ON \`payload_locked_documents\` (\`global_slug\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_updated_at_idx\` ON \`payload_locked_documents\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_created_at_idx\` ON \`payload_locked_documents\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_locked_documents_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	\`posts_id\` integer,
  	\`media_id\` integer,
  	\`categories_id\` integer,
  	\`users_id\` integer,
  	\`roles_id\` integer,
  	\`redirects_id\` integer,
  	\`forms_id\` integer,
  	\`form_submissions_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_locked_documents\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`posts_id\`) REFERENCES \`posts\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`media_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`categories_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`roles_id\`) REFERENCES \`roles\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`redirects_id\`) REFERENCES \`redirects\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`forms_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`form_submissions_id\`) REFERENCES \`form_submissions\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_order_idx\` ON \`payload_locked_documents_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_parent_idx\` ON \`payload_locked_documents_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_path_idx\` ON \`payload_locked_documents_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_pages_id_idx\` ON \`payload_locked_documents_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_posts_id_idx\` ON \`payload_locked_documents_rels\` (\`posts_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_media_id_idx\` ON \`payload_locked_documents_rels\` (\`media_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_categories_id_idx\` ON \`payload_locked_documents_rels\` (\`categories_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_users_id_idx\` ON \`payload_locked_documents_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_roles_id_idx\` ON \`payload_locked_documents_rels\` (\`roles_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_redirects_id_idx\` ON \`payload_locked_documents_rels\` (\`redirects_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_forms_id_idx\` ON \`payload_locked_documents_rels\` (\`forms_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_locked_documents_rels_form_submissions_id_idx\` ON \`payload_locked_documents_rels\` (\`form_submissions_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`key\` text,
  	\`value\` text,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_key_idx\` ON \`payload_preferences\` (\`key\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_updated_at_idx\` ON \`payload_preferences\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_created_at_idx\` ON \`payload_preferences\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`payload_preferences_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`users_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`payload_preferences\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`users_id\`) REFERENCES \`users\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_order_idx\` ON \`payload_preferences_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_parent_idx\` ON \`payload_preferences_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_path_idx\` ON \`payload_preferences_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`payload_preferences_rels_users_id_idx\` ON \`payload_preferences_rels\` (\`users_id\`);`)
  await db.run(sql`CREATE TABLE \`payload_migrations\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`batch\` numeric,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`payload_migrations_updated_at_idx\` ON \`payload_migrations\` (\`updated_at\`);`)
  await db.run(sql`CREATE INDEX \`payload_migrations_created_at_idx\` ON \`payload_migrations\` (\`created_at\`);`)
  await db.run(sql`CREATE TABLE \`theme_config\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`radius\` text DEFAULT '0.6rem',
  	\`regular_colors_background\` text DEFAULT 'hsl(0, 0%, 100%)',
  	\`regular_colors_foreground\` text DEFAULT 'hsl(222.2, 84%, 4.9%)',
  	\`regular_colors_card\` text DEFAULT 'hsl(240, 5%, 96%)',
  	\`regular_colors_card_foreground\` text DEFAULT 'hsl(222.2, 84%, 4.9%)',
  	\`regular_colors_popover\` text DEFAULT 'hsl(0, 0%, 100%)',
  	\`regular_colors_popover_foreground\` text DEFAULT 'hsl(222.2, 84%, 4.9%)',
  	\`regular_colors_primary\` text DEFAULT 'hsl(222.2, 47.4%, 11.2%)',
  	\`regular_colors_primary_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`regular_colors_secondary\` text DEFAULT 'hsl(210, 40%, 96.1%)',
  	\`regular_colors_secondary_foreground\` text DEFAULT 'hsl(222.2, 47.4%, 11.2%)',
  	\`regular_colors_muted\` text DEFAULT 'hsl(210, 40%, 96.1%)',
  	\`regular_colors_muted_foreground\` text DEFAULT 'hsl(215.4, 16.3%, 46.9%)',
  	\`regular_colors_accent\` text DEFAULT 'hsl(210, 40%, 96.1%)',
  	\`regular_colors_accent_foreground\` text DEFAULT 'hsl(222.2, 47.4%, 11.2%)',
  	\`regular_colors_destructive\` text DEFAULT 'hsl(0, 84.2%, 60.2%)',
  	\`regular_colors_destructive_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`regular_colors_border\` text DEFAULT 'hsl(240, 6%, 90%)',
  	\`regular_colors_input\` text DEFAULT 'hsl(214.3, 31.8%, 91.4%)',
  	\`regular_colors_ring_3\` text DEFAULT 'hsl(222.2, 84%, 4.9%)',
  	\`regular_colors_success\` text DEFAULT 'hsl(196, 52%, 74%)',
  	\`regular_colors_warning\` text DEFAULT 'hsl(34, 89%, 85%)',
  	\`regular_colors_error\` text DEFAULT 'hsl(10, 100%, 86%)',
  	\`regular_colors_chart_1\` text DEFAULT 'hsl(12, 76%, 61%)',
  	\`regular_colors_chart_2\` text DEFAULT 'hsl(173, 58%, 39%)',
  	\`regular_colors_chart_3\` text DEFAULT 'hsl(197, 37%, 24%)',
  	\`regular_colors_chart_4\` text DEFAULT 'hsl(43, 74%, 66%)',
  	\`regular_colors_chart_5\` text DEFAULT 'hsl(27, 87%, 67%)',
  	\`regular_colors_muted2\` text DEFAULT 'hsl(0, 0%, 91%)',
  	\`regular_colors_muted2_foreground\` text DEFAULT 'hsl(240, 3.8%, 46.1%)',
  	\`darkmode_colors_enable_dark_mode\` integer,
  	\`darkmode_colors_background\` text DEFAULT 'hsl(0, 0%, 0%)',
  	\`darkmode_colors_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_card\` text DEFAULT 'hsl(240, 6%, 10%)',
  	\`darkmode_colors_card_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_popover\` text DEFAULT 'hsl(222.2 84%, 4.9%)',
  	\`darkmode_colors_popover_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_primary\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_primary_foreground\` text DEFAULT 'hsl(222.2 47.4%, 11.2%)',
  	\`darkmode_colors_secondary\` text DEFAULT 'hsl(217.2 32.6%, 17.5%)',
  	\`darkmode_colors_secondary_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_muted\` text DEFAULT 'hsl(217.2 32.6%, 17.5%)',
  	\`darkmode_colors_muted_foreground\` text DEFAULT 'hsl(215, 20.2%, 65.1%)',
  	\`darkmode_colors_accent\` text DEFAULT 'hsl(217.2 32.6%, 17.5%)',
  	\`darkmode_colors_accent_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_destructive\` text DEFAULT 'hsl(0, 62.8%, 30.6%)',
  	\`darkmode_colors_destructive_foreground\` text DEFAULT 'hsl(210, 40%, 98%)',
  	\`darkmode_colors_border\` text DEFAULT 'hsl(240, 4%, 16%)',
  	\`darkmode_colors_input\` text DEFAULT 'hsl(217.2 32.6%, 17.5%)',
  	\`darkmode_colors_ring_3\` text DEFAULT 'hsl(212,.7 26.8%, 83.9%)',
  	\`darkmode_colors_success\` text DEFAULT 'hsl(196, 100%, 14%)',
  	\`darkmode_colors_warning\` text DEFAULT 'hsl(34, 51%, 25%)',
  	\`darkmode_colors_error\` text DEFAULT 'hsl(10, 39%, 43%)',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`header_blocks_sub_subitems\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_sub\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_sub_subitems_order_idx\` ON \`header_blocks_sub_subitems\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_sub_subitems_parent_id_idx\` ON \`header_blocks_sub_subitems\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_sub_subitems_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_sub_subitems\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_sub_subitems_locales_locale_parent_id_unique\` ON \`header_blocks_sub_subitems_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_sub\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_sub_order_idx\` ON \`header_blocks_sub\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_sub_parent_id_idx\` ON \`header_blocks_sub\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_sub_path_idx\` ON \`header_blocks_sub\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_sub_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_sub\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_sub_locales_locale_parent_id_unique\` ON \`header_blocks_sub_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_link\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_link_order_idx\` ON \`header_blocks_link\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_link_parent_id_idx\` ON \`header_blocks_link\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_link_path_idx\` ON \`header_blocks_link\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_link_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_link\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_link_locales_locale_parent_id_unique\` ON \`header_blocks_link_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_featured_banner\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`background_color\` text DEFAULT 'primary',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_banner_order_idx\` ON \`header_blocks_featured_banner\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_banner_parent_id_idx\` ON \`header_blocks_featured_banner\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_banner_path_idx\` ON \`header_blocks_featured_banner\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_banner_image_idx\` ON \`header_blocks_featured_banner\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_featured_banner_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`description\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_featured_banner\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_featured_banner_locales_locale_parent_id_uniqu\` ON \`header_blocks_featured_banner_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_category_grid_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_category_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_category_grid_items_order_idx\` ON \`header_blocks_category_grid_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_category_grid_items_parent_id_idx\` ON \`header_blocks_category_grid_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_category_grid_items_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_category_grid_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_category_grid_items_locales_locale_parent_id_u\` ON \`header_blocks_category_grid_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_category_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_category_grid_order_idx\` ON \`header_blocks_category_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_category_grid_parent_id_idx\` ON \`header_blocks_category_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_category_grid_path_idx\` ON \`header_blocks_category_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_category_grid_locales\` (
  	\`title\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_category_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_category_grid_locales_locale_parent_id_unique\` ON \`header_blocks_category_grid_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_card_grid_cards_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_card_grid_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_cards_links_order_idx\` ON \`header_blocks_card_grid_cards_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_cards_links_parent_id_idx\` ON \`header_blocks_card_grid_cards_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_card_grid_cards_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_card_grid_cards_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_card_grid_cards_links_locales_locale_parent_id\` ON \`header_blocks_card_grid_cards_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_card_grid_cards\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_card_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_cards_order_idx\` ON \`header_blocks_card_grid_cards\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_cards_parent_id_idx\` ON \`header_blocks_card_grid_cards\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_card_grid_cards_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_card_grid_cards\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_card_grid_cards_locales_locale_parent_id_uniqu\` ON \`header_blocks_card_grid_cards_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_card_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_order_idx\` ON \`header_blocks_card_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_parent_id_idx\` ON \`header_blocks_card_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_card_grid_path_idx\` ON \`header_blocks_card_grid\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_card_grid_locales\` (
  	\`title\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_card_grid\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_card_grid_locales_locale_parent_id_unique\` ON \`header_blocks_card_grid_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_feature_list_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_feature_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_feature_list_features_order_idx\` ON \`header_blocks_feature_list_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_feature_list_features_parent_id_idx\` ON \`header_blocks_feature_list_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_feature_list_features_locales\` (
  	\`title\` text,
  	\`description\` text,
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_feature_list_features\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_feature_list_features_locales_locale_parent_id\` ON \`header_blocks_feature_list_features_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_feature_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_feature_list_order_idx\` ON \`header_blocks_feature_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_feature_list_parent_id_idx\` ON \`header_blocks_feature_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_feature_list_path_idx\` ON \`header_blocks_feature_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_feature_list_locales\` (
  	\`title\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_feature_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_feature_list_locales_locale_parent_id_unique\` ON \`header_blocks_feature_list_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_simple_links_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_simple_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_simple_links_links_order_idx\` ON \`header_blocks_simple_links_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_simple_links_links_parent_id_idx\` ON \`header_blocks_simple_links_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_simple_links_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`description\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_simple_links_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_simple_links_links_locales_locale_parent_id_un\` ON \`header_blocks_simple_links_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_simple_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_simple_links_order_idx\` ON \`header_blocks_simple_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_simple_links_parent_id_idx\` ON \`header_blocks_simple_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_simple_links_path_idx\` ON \`header_blocks_simple_links\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_simple_links_locales\` (
  	\`title\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_simple_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_simple_links_locales_locale_parent_id_unique\` ON \`header_blocks_simple_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_featured_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`image_id\` integer,
  	\`background_color\` text DEFAULT 'primary',
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_image_order_idx\` ON \`header_blocks_featured_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_image_parent_id_idx\` ON \`header_blocks_featured_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_image_path_idx\` ON \`header_blocks_featured_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_featured_image_image_idx\` ON \`header_blocks_featured_image\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_featured_image_locales\` (
  	\`title\` text,
  	\`subtitle\` text,
  	\`description\` text,
  	\`link_url\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_featured_image\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_featured_image_locales_locale_parent_id_unique\` ON \`header_blocks_featured_image_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_submenu\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_blocks_submenu_order_idx\` ON \`header_blocks_submenu\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_submenu_parent_id_idx\` ON \`header_blocks_submenu\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_blocks_submenu_path_idx\` ON \`header_blocks_submenu\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`header_blocks_submenu_locales\` (
  	\`label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_blocks_submenu\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_blocks_submenu_locales_locale_parent_id_unique\` ON \`header_blocks_submenu_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	\`link_appearance\` text DEFAULT 'default',
  	\`link_size\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_buttons_order_idx\` ON \`header_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`header_buttons_parent_id_idx\` ON \`header_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_buttons_locales\` (
  	\`link_url\` text,
  	\`link_label\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header_buttons\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_buttons_locales_locale_parent_id_unique\` ON \`header_buttons_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text DEFAULT '1' NOT NULL,
  	\`is_search_enabled\` integer DEFAULT false,
  	\`logo_id\` integer NOT NULL,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`header_logo_idx\` ON \`header\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`header_locales\` (
  	\`copyright\` text DEFAULT 'Copyright © All Rights Reserved.',
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`header_locales_locale_parent_id_unique\` ON \`header_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`header_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`header\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`header_rels_order_idx\` ON \`header_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`header_rels_parent_idx\` ON \`header_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`header_rels_path_idx\` ON \`header_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`header_rels_pages_id_idx\` ON \`header_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_legal_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_legal_links_order_idx\` ON \`footer_legal_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_legal_links_parent_id_idx\` ON \`footer_legal_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_legal_links_locales\` (
  	\`link_url\` text,
  	\`link_label\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_legal_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`footer_legal_links_locales_locale_parent_id_unique\` ON \`footer_legal_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_social_links\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_social_links_order_idx\` ON \`footer_social_links\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_social_links_parent_id_idx\` ON \`footer_social_links\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_social_links_locales\` (
  	\`url\` text,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_social_links\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`footer_social_links_locales_locale_parent_id_unique\` ON \`footer_social_links_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_nav_items_sub_nav_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`link_type\` text DEFAULT 'reference',
  	\`link_new_tab\` integer,
  	\`link_section\` text,
  	\`link_icon_before\` text,
  	\`link_icon_after\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_nav_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_nav_items_sub_nav_items_order_idx\` ON \`footer_nav_items_sub_nav_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_nav_items_sub_nav_items_parent_id_idx\` ON \`footer_nav_items_sub_nav_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_nav_items_sub_nav_items_locales\` (
  	\`link_url\` text,
  	\`link_label\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_nav_items_sub_nav_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`footer_nav_items_sub_nav_items_locales_locale_parent_id_uniq\` ON \`footer_nav_items_sub_nav_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_nav_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_nav_items_order_idx\` ON \`footer_nav_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`footer_nav_items_parent_id_idx\` ON \`footer_nav_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_nav_items_locales\` (
  	\`title\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer_nav_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`footer_nav_items_locales_locale_parent_id_unique\` ON \`footer_nav_items_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`background_color\` text,
  	\`design_version\` text,
  	\`logo_id\` integer,
  	\`updated_at\` text,
  	\`created_at\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_logo_idx\` ON \`footer\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_locales\` (
  	\`copyright\` text DEFAULT 'Company Name. All rights reserved.',
  	\`subline\` text DEFAULT 'Components made easy. This cool starter template will help you get started with your next project.',
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`footer\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE UNIQUE INDEX \`footer_locales_locale_parent_id_unique\` ON \`footer_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`footer_rels\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`order\` integer,
  	\`parent_id\` integer NOT NULL,
  	\`path\` text NOT NULL,
  	\`pages_id\` integer,
  	FOREIGN KEY (\`parent_id\`) REFERENCES \`footer\`(\`id\`) ON UPDATE no action ON DELETE cascade,
  	FOREIGN KEY (\`pages_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`footer_rels_order_idx\` ON \`footer_rels\` (\`order\`);`)
  await db.run(sql`CREATE INDEX \`footer_rels_parent_idx\` ON \`footer_rels\` (\`parent_id\`);`)
  await db.run(sql`CREATE INDEX \`footer_rels_path_idx\` ON \`footer_rels\` (\`path\`);`)
  await db.run(sql`CREATE INDEX \`footer_rels_pages_id_idx\` ON \`footer_rels\` (\`pages_id\`);`)
  await db.run(sql`CREATE TABLE \`page_config\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`open_graph_text_color\` text DEFAULT '#000000',
  	\`open_graph_text_position\` text DEFAULT 'center',
  	\`updated_at\` text,
  	\`created_at\` text
  );
  `)
  await db.run(sql`CREATE TABLE \`page_config_locales\` (
  	\`default_meta_title\` text NOT NULL,
  	\`default_meta_description\` text NOT NULL,
  	\`open_graph_background_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`open_graph_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`page_config\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`page_config_open_graph_open_graph_background_image_idx\` ON \`page_config_locales\` (\`open_graph_background_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`page_config_locales_locale_parent_id_unique\` ON \`page_config_locales\` (\`_locale\`,\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_page_config_v\` (
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`version_open_graph_text_color\` text DEFAULT '#000000',
  	\`version_open_graph_text_position\` text DEFAULT 'center',
  	\`version_updated_at\` text,
  	\`version_created_at\` text,
  	\`created_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL,
  	\`updated_at\` text DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now')) NOT NULL
  );
  `)
  await db.run(sql`CREATE INDEX \`_page_config_v_created_at_idx\` ON \`_page_config_v\` (\`created_at\`);`)
  await db.run(sql`CREATE INDEX \`_page_config_v_updated_at_idx\` ON \`_page_config_v\` (\`updated_at\`);`)
  await db.run(sql`CREATE TABLE \`_page_config_v_locales\` (
  	\`version_default_meta_title\` text NOT NULL,
  	\`version_default_meta_description\` text NOT NULL,
  	\`version_open_graph_background_image_id\` integer,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_locale\` text NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	FOREIGN KEY (\`version_open_graph_background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_page_config_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_page_config_v_version_open_graph_version_open_graph_bac_idx\` ON \`_page_config_v_locales\` (\`version_open_graph_background_image_id\`,\`_locale\`);`)
  await db.run(sql`CREATE UNIQUE INDEX \`_page_config_v_locales_locale_parent_id_unique\` ON \`_page_config_v_locales\` (\`_locale\`,\`_parent_id\`);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_hero_links\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_u_s_ps\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_u_s_ps_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_stats_items\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_stats_items_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_tabs\`;`)
  await db.run(sql`DROP TABLE \`pages_hero_tabs_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_metrics\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_metrics_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_u_s_ps_u_s_p_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_u_s_ps_u_s_p_features_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_u_s_ps_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_u_s_ps_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_u_s_ps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_u_s_ps_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_feature_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_block\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_block_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logos_testimonials\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logos_testimonials_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logos_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_about_counter\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_about\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_about_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_contact_blocks\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_contact_blocks_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_maps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_contact_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_elements\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_elements_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_gallery_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonial_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonial_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonial_testimonial\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonial_testimonial_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonial\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_testimonial_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_faqs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_faqs_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_faq_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stat_stats\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stat_stats_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stat_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stat_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stat\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stat_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_text_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_text_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_text\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_text_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_block\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_media_block_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_block_2\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_form_block_2_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_split_view\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_customblock\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_changelog_entries\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_changelog\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_changelog_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_banner_links\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_banner_links_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_banner\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_banner_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_casestudies_slides_images\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_casestudies_slides\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_casestudies\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_timeline_sections\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_timeline_sections_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_timeline\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_timeline_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_signup\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_login\`;`)
  await db.run(sql`DROP TABLE \`pages_breadcrumbs\`;`)
  await db.run(sql`DROP TABLE \`pages\`;`)
  await db.run(sql`DROP TABLE \`pages_locales\`;`)
  await db.run(sql`DROP TABLE \`pages_rels\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_u_s_ps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_u_s_ps_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_stats_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_stats_items_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_tabs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_hero_tabs_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_metrics\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_metrics_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_u_s_ps_u_s_p_features\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_u_s_ps_u_s_p_features_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_u_s_ps_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_u_s_ps_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_u_s_ps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_u_s_ps_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_feature_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_block_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_logos_testimonials\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_logos_testimonials_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_logos\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_logos_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_about_counter\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_about\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_about_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_contact_blocks\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_contact_blocks_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_maps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_contact_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_elements\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_elements_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_gallery_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_testimonial_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_testimonial_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_testimonial_testimonial\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_testimonial_testimonial_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_testimonial\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_testimonial_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_faq_faqs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_faq_faqs_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_faq\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_faq_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stat_stats\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stat_stats_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stat_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stat_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stat\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stat_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_text_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_text_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_text\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_text_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_block\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_media_block_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_block_2\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_form_block_2_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_split_view\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_customblock\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_changelog_entries\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_changelog\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_changelog_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_blog_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_blog_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_blog\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_blog_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_banner_links\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_banner_links_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_banner\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_banner_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_casestudies_slides_images\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_casestudies_slides\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_casestudies\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_timeline_sections\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_timeline_sections_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_timeline\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_timeline_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_signup\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_login\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_version_breadcrumbs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_rels\`;`)
  await db.run(sql`DROP TABLE \`posts_populated_authors\`;`)
  await db.run(sql`DROP TABLE \`posts\`;`)
  await db.run(sql`DROP TABLE \`posts_locales\`;`)
  await db.run(sql`DROP TABLE \`posts_rels\`;`)
  await db.run(sql`DROP TABLE \`_posts_v_version_populated_authors\`;`)
  await db.run(sql`DROP TABLE \`_posts_v\`;`)
  await db.run(sql`DROP TABLE \`_posts_v_locales\`;`)
  await db.run(sql`DROP TABLE \`_posts_v_rels\`;`)
  await db.run(sql`DROP TABLE \`media\`;`)
  await db.run(sql`DROP TABLE \`media_locales\`;`)
  await db.run(sql`DROP TABLE \`categories_breadcrumbs\`;`)
  await db.run(sql`DROP TABLE \`categories\`;`)
  await db.run(sql`DROP TABLE \`users_sessions\`;`)
  await db.run(sql`DROP TABLE \`users\`;`)
  await db.run(sql`DROP TABLE \`users_rels\`;`)
  await db.run(sql`DROP TABLE \`roles\`;`)
  await db.run(sql`DROP TABLE \`redirects\`;`)
  await db.run(sql`DROP TABLE \`redirects_rels\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_checkbox\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_checkbox_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_country\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_country_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_email\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_email_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_message\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_message_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_number\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_number_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_select_options\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_select_options_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_select\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_select_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_state\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_state_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_text\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_text_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_textarea\`;`)
  await db.run(sql`DROP TABLE \`forms_blocks_textarea_locales\`;`)
  await db.run(sql`DROP TABLE \`forms_emails\`;`)
  await db.run(sql`DROP TABLE \`forms_emails_locales\`;`)
  await db.run(sql`DROP TABLE \`forms\`;`)
  await db.run(sql`DROP TABLE \`forms_locales\`;`)
  await db.run(sql`DROP TABLE \`form_submissions_submission_data\`;`)
  await db.run(sql`DROP TABLE \`form_submissions\`;`)
  await db.run(sql`DROP TABLE \`payload_kv\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents\`;`)
  await db.run(sql`DROP TABLE \`payload_locked_documents_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences\`;`)
  await db.run(sql`DROP TABLE \`payload_preferences_rels\`;`)
  await db.run(sql`DROP TABLE \`payload_migrations\`;`)
  await db.run(sql`DROP TABLE \`theme_config\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_sub_subitems\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_sub_subitems_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_sub\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_sub_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_link\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_link_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_featured_banner\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_featured_banner_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_category_grid_items\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_category_grid_items_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_category_grid\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_category_grid_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_card_grid_cards_links\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_card_grid_cards_links_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_card_grid_cards\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_card_grid_cards_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_card_grid\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_card_grid_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_feature_list_features\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_feature_list_features_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_feature_list\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_feature_list_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_simple_links_links\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_simple_links_links_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_simple_links\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_simple_links_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_featured_image\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_featured_image_locales\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_submenu\`;`)
  await db.run(sql`DROP TABLE \`header_blocks_submenu_locales\`;`)
  await db.run(sql`DROP TABLE \`header_buttons\`;`)
  await db.run(sql`DROP TABLE \`header_buttons_locales\`;`)
  await db.run(sql`DROP TABLE \`header\`;`)
  await db.run(sql`DROP TABLE \`header_locales\`;`)
  await db.run(sql`DROP TABLE \`header_rels\`;`)
  await db.run(sql`DROP TABLE \`footer_legal_links\`;`)
  await db.run(sql`DROP TABLE \`footer_legal_links_locales\`;`)
  await db.run(sql`DROP TABLE \`footer_social_links\`;`)
  await db.run(sql`DROP TABLE \`footer_social_links_locales\`;`)
  await db.run(sql`DROP TABLE \`footer_nav_items_sub_nav_items\`;`)
  await db.run(sql`DROP TABLE \`footer_nav_items_sub_nav_items_locales\`;`)
  await db.run(sql`DROP TABLE \`footer_nav_items\`;`)
  await db.run(sql`DROP TABLE \`footer_nav_items_locales\`;`)
  await db.run(sql`DROP TABLE \`footer\`;`)
  await db.run(sql`DROP TABLE \`footer_locales\`;`)
  await db.run(sql`DROP TABLE \`footer_rels\`;`)
  await db.run(sql`DROP TABLE \`page_config\`;`)
  await db.run(sql`DROP TABLE \`page_config_locales\`;`)
  await db.run(sql`DROP TABLE \`_page_config_v\`;`)
  await db.run(sql`DROP TABLE \`_page_config_v_locales\`;`)
}
