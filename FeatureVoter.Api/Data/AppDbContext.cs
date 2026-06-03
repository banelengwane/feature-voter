using FeatureVoter.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace FeatureVoter.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<FeatureRequest> FeatureRequests => Set<FeatureRequest>();
    }
}