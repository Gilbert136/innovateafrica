using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class Implementation
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Alias { get; set; }
        public string Description { get; set; }
        public int? Star { get; set; }
        public string ImplementationStatus { get; set; }
        public DateTime? StartDate { get; set; }
        public DateTime? EndDate { get; set; }


        //public ICollection<string> ReferenceLinks { get; set; }
        //public ICollection<string> DevelopmentTools { get; set; }
        //public ICollection<string> Tags { get; set; }
        //public ICollection<int> Likes { get; set; }
        //public ICollection<int> DisLikes { get; set; }


        [ForeignKey(nameof(Models.ImplementationContributor.ImplementationId))]
        public virtual ICollection<ImplementationContributor> Contributors { get; set; }
        [ForeignKey(nameof(Models.Comment.ImplemetationId))]
        public virtual ICollection<Comment> Comments { get; set; }
        [ForeignKey(nameof(Models.Document.ImplementationId))]
        public virtual ICollection<Document> Documents { get; set; }
    }
}
