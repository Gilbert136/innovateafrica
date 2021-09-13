using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class IdeaContributor
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey(nameof(Models.IdeaContributor.Idea))]
        public int? IdeaId { get; set; }

        [ForeignKey(nameof(Models.IdeaContributor.User))]
        public int? UserId { get; set; }

        public virtual Idea Idea { get; set; }
        public virtual User User { get; set; }
    }
}
