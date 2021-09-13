using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class Document
    {
        [Key]
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Url { get; set; }
        public int? Views { get; set; }
        
        //public ICollection<string> Tags { get; set; }
        //public ICollection<int> Likes { get; set; }
        //public ICollection<int> DisLikes { get; set; }

        public int? ProjectId { get; set; }
        public int? ImplementationId { get; set; }
        public int? IdeaId { get; set; }

        [ForeignKey(nameof(Models.Comment.DocumentId))]
        public ICollection<Comment> Comments { get; set; }
    }
}
