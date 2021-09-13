using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class User
    {
        public int Id { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        public string Telephone { get; set; }
        public string Country { get; set; }
        public string Organization { get; set; }
        public string Bio { get; set; }
        public int? Star { get; set; }
        public string GithubLink { get; set; }
        public string LinkedInLink { get; set; }


        //public ICollection<string> OtherPersonalLinks { get; set; }
        //public ICollection<string> Interests { get; set; }
        //public ICollection<string> Skills { get; set; }


        [ForeignKey(nameof(Models.UserFollower.UserId))]
        public virtual ICollection<UserFollower> Followers { get; set; }

        [ForeignKey(nameof(Models.UserFollowering.UserId))]
        public virtual ICollection<UserFollowering> Followings { get; set; }


        [ForeignKey(nameof(Models.ProjectContributor.UserId))]
        public virtual ICollection<ProjectContributor> ProjectContributions { get; set; }
        [ForeignKey(nameof(Models.IdeaContributor.UserId))]
        public virtual ICollection<IdeaContributor> IdeaContributions { get; set; }
        [ForeignKey(nameof(Models.ImplementationContributor.UserId))]
        public virtual ICollection<ImplementationContributor> ImplementationContributions { get; set; }




    }
}
