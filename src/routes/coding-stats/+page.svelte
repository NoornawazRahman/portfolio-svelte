<script lang="ts">
	let leetcodeUsername = 'noornawazrahman'; 
	let gfgUsername = 'noornawad1bj'; 

	const profiles = [
		{
			name: 'Codeforces',
			icon: 'https://codeforces.org/s/89070/images/codeforces-sponsored-by-ton.png',
			url: 'https://codeforces.com/profile/Noornawaz'
		},
		{
			name: 'CodeChef',
			icon: 'https://cdn.codechef.com/images/cc-logo.svg',
			url: 'https://www.codechef.com/users/noornawaz_r'
		}
	];
</script>

<div class="container">
	<div class="stats-grid">
		<a href={`https://leetcode.com/u/${leetcodeUsername}/`} target="_blank" class="stat-card">
			<h1>LeetCode Stats</h1>
			<img src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=dark`} alt="LeetCode Stats Card" />
		</a>

		<a href={`https://www.geeksforgeeks.org/user/${gfgUsername}`} target="_blank" class="stat-card">
			<h1>GeeksForGeeks Stats</h1>
			<img src={`https://gfgstatscard.vercel.app/${gfgUsername}`} alt="GFG stats" />
		</a>
	</div>

	<div class="profiles-section">
		<h2>Other Profiles</h2>
		<div class="profiles-grid">
			{#each profiles as site}
				<a href={site.url} target="_blank" rel="noopener noreferrer" class="profile-card" title={site.name}>
					<img src={site.icon} alt={site.name} class="profile-icon" />
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 2rem;
		background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
		min-height: 100vh;
	}

	.stats-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.stat-card {
		text-decoration: none;
		display: block;
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		border-radius: 12px;
		overflow: hidden;
		background: #1f1f1f;
		padding: 1.5rem;
		border: 1px solid #333;
	}

	.stat-card:hover {
		transform: translateY(-5px);
		box-shadow: 0 8px 24px rgba(255, 255, 255, 0.1);
		border-color: #555;
	}

	.stat-card h1 {
		color: #ffffff;
		font-size: 1.5rem;
		margin-bottom: 1rem;
		text-align: center;
		font-weight: 600;
	}

	.stat-card img {
		width: 100%;
		border-radius: 8px;
	}

	.profiles-section {
		margin-top: 3rem;
	}

	.profiles-section h2 {
		color: #ffffff;
		font-size: 2rem;
		text-align: center;
		margin-bottom: 2rem;
		font-weight: 600;
	}

	.profiles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		max-width: 600px;
		margin: 0 auto;
	}

	.profile-card {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 2.5rem;
		background: linear-gradient(145deg, #1f1f1f, #252525);
		border-radius: 16px;
		text-decoration: none;
		transition: all 0.3s ease;
		border: 1px solid #2a2a2a;
		position: relative;
		overflow: hidden;
		aspect-ratio: 1;
	}

	.profile-card::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: linear-gradient(135deg, rgba(255,255,255,0.05) 0%, transparent 100%);
		opacity: 0;
		transition: opacity 0.3s ease;
	}

	.profile-card:hover::before {
		opacity: 1;
	}

	.profile-card:hover {
		background: linear-gradient(145deg, #252525, #2a2a2a);
		border-color: #444;
		transform: translateY(-8px) scale(1.02);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4);
	}

	.profile-icon {
		width: 100%;
		height: 100%;
		object-fit: contain;
		filter: brightness(0.95);
		transition: all 0.3s ease;
	}

	.profile-card:hover .profile-icon {
		filter: brightness(1.1);
		transform: scale(1.05);
	}

	@media (max-width: 768px) {
		.profiles-grid {
			grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
			max-width: 400px;
		}
	}
</style>