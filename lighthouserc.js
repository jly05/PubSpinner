module.exports = {
    ci: {
        upload: {
            target: 'temporary-public-storage',
        },
        assert: {
            assertions: {
                'categories:performance': ['warn', { minScore: 0.9 }],
                'categories:accessibility': ['warn', { minScore: 1 }],
                'categories:pwa': 'off',
                'categories:seo': ['warn', { minScore: 1 }],
                'categories:best-practices': ['warn', { minScore: 1 }],
            },
        },
    },
}
