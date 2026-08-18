const repos = [
  { selector: '[data-repo="opensourcepolitics/decidim-spam_detection"]', endpoint: 'https://api.github.com/repos/OpenSourcePolitics/decidim-spam_detection' },
  { selector: '[data-repo="decidim/decidim"]', endpoint: 'https://api.github.com/repos/decidim/decidim' },
];

const formatDate = (date: string) => new Intl.DateTimeFormat('en', { month: 'short', year: 'numeric' }).format(new Date(date));
const formatCount = (count: number) => new Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 1 }).format(count);

async function loadGitHubMetadata() {
  try {
    const [profileResponse, ...repoResponses] = await Promise.all([
      fetch('https://api.github.com/users/armandfardeau'),
      ...repos.map((repo) => fetch(repo.endpoint)),
    ]);
    if (profileResponse.ok) {
      const profile = await profileResponse.json();
      document.querySelector('#repo-count')!.textContent = profile.public_repos ?? '—';
      document.querySelector('#follower-count')!.textContent = formatCount(profile.followers ?? 0);
    }
    await Promise.all(repoResponses.map(async (response, index) => {
      if (!response.ok) return;
      const repo = await response.json();
      const stats = document.querySelector(`${repos[index].selector} .repo-stats`);
      if (stats) stats.textContent = `${repo.language || 'Open source'} · ★ ${formatCount(repo.stargazers_count)} · updated ${formatDate(repo.updated_at)}`;
    }));
  } catch {
    document.documentElement.dataset.github = 'offline';
  }
}

loadGitHubMetadata();
