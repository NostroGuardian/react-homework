export function parseDuration(duration: string): number {
	const regex = /PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/;
	const matches = duration.match(regex);
	const hours = matches?.[1] ? parseInt(matches[1], 10) : 0;
	const minutes = matches?.[2] ? parseInt(matches[2], 10) : 0;
	const seconds = matches?.[3] ? parseInt(matches[3], 10) : 0;
	return hours * 60 + minutes + seconds / 60;
}
