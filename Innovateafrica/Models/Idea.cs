using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class Idea
    {
        public Idea()
        {
            Contributors = new HashSet<IdeaContributor>();
            Documents = new HashSet<Document>();
            Comments = new HashSet<Comment>();
        }

        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int? Star { get; set; }


        //public ICollection<string> Audience { get; set; }
        //public ICollection<string> ReferenceLinks { get; set; }
        //public ICollection<string> Tags { get; set; }
        //public ICollection<string> Seeks { get; set; }
        //public ICollection<int> Likes { get; set; }
        //public ICollection<int> DisLikes { get; set; }


        [ForeignKey(nameof(Models.IdeaContributor.IdeaId))]
        public virtual ICollection<IdeaContributor> Contributors { get; set; }
        [ForeignKey(nameof(Models.Document.IdeaId))]
        public virtual ICollection<Document> Documents { get; set; }
        [ForeignKey(nameof(Models.Comment.IdeaId))]
        public virtual ICollection<Comment> Comments { get; set; }

    }
}
