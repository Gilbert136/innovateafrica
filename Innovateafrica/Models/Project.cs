using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class Project
    {
        [Key]
        public int Id { get; set; }
        public int? Star { get; set; }

        //public ICollection<string> Tags { get; set; }
        //public ICollection<int> Likes { get; set; }
        //public ICollection<int> DisLikes { get; set; }
        //public ICollection<string> ProjectManagerReview { get; set; }
        //public ICollection<string> OtherRepositoryLinks { get; set; }


        public int? ProgressPercentage { get; set; }
        public string ProjectStatus { get; set; }
        public string RepositoryLink { get; set; }


        [ForeignKey(nameof(Models.ProjectContributor.ProjectId))]
        public virtual ICollection<ProjectContributor> Contributors { get; set; }
        [ForeignKey(nameof(Models.Document.ProjectId))]
        public virtual ICollection<Document> Documents { get; set; }
        [ForeignKey(nameof(Models.Comment.ProjectId))]
        public virtual ICollection<Comment> Comments { get; set; }


    }
}
