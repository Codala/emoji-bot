module.exports = {
	code: `
	$disableConsoleErrors
	
	$let[emoji;https://cdn.discordapp.com/emojis/$option[emoji]]

	$onlyIf[$hasPerms[$guildID;$userID;ManageGuildExpressions];$ephemeral You are missing the \`ManageGuildExpressions\` permissions.]
	$onlyIf[$httpRequest[$get[emoji];get]==200;$ephemeral The request didn't succeed. Make sure you provided a valid emoji ID.]

	$if[$addEmoji[$guildID;$option[name];$get[emoji];true]!=;
	$title[New emoji]
	$thumbnail[$get[emoji]]
	$description[The emoji was added to \`$guildName[$guildID]\` successfully.]
	$footer[Added by $username]
	$timestamp
	$color[#91c587]
	;
	$ephemeral An unexpected error occurred.
	]
	`,
	data: {
		name: "steal",
		description: "Steal an emoji from another server.",
		type: 1,
		options: [
			{
				type: 3,
				name: "emoji",
				description: "Emoji ID",
				required: true,
				min_length: 17,
				max_length: 19,
			},
			{
				type: 3,
				name: "name",
				description: "Name of the new emoji",
				required: true,
				min_length: 2,
				max_length: 32,
			},
		],
		dmPermission: false,
	},
};
