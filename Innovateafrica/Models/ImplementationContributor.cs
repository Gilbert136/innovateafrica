using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class ImplementationContributor
    {
        [Key]
        public int Id { get; set; }
        [ForeignKey(nameof(Models.ImplementationContributor.Implementation))]
        public int? ImplementationId { get; set; }
        [ForeignKey(nameof(Models.ImplementationContributor.User))]
        public int? UserId { get; set; }


        public virtual Implementation Implementation { get; set; }
        public virtual User User { get; set; }
    }
}
