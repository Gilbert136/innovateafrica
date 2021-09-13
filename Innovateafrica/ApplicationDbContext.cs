using Innovateafrica.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica
{
    public class ApplicationDbContext : IdentityDbContext
    {
        private readonly DbContextOptions _options;

        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {
            _options = options;
        }

        public DbSet<Comment> Comment { get; set; }
        public DbSet<Document> Document { get; set; }
        public DbSet<Idea> Idea { get; set; }
        public DbSet<IdeaContributor> IdeaContributor { get; set; }
        public DbSet<Implementation> Implementation { get; set; }
        public DbSet<ImplementationContributor> ImplementationContributor { get; set; }
        public DbSet<Project> Project { get; set; }
        public DbSet<ProjectContributor> ProjectContributor { get; set; }
        public DbSet<User> User { get; set; }
        public DbSet<UserFollower> UserFollower { get; set; }
        public DbSet<UserFollowering> UserFollowering { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

        }
    }
}
