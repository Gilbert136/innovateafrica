using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Innovateafrica.Models
{
    public class UserFollowering
    {
        [Key]
        public int Id { get; set; }
        public int? UserId { get; set; }

        [ForeignKey(nameof(Models.UserFollowering.Followering))]
        public int? FolloweringId { get; set; }

        //[ForeignKey(nameof(Models.UserFollowering.FolloweringId))]
        public virtual User Followering { get; set; }
    }
}
