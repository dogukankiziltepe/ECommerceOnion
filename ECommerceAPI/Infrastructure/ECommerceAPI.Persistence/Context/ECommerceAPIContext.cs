using System;
using ECommerceAPI.Domain.Entities;
using ECommerceAPI.Domain.Entities.Common;
using Microsoft.EntityFrameworkCore;

namespace ECommerceAPI.Persistence.Context
{
	public class ECommerceAPIContext:DbContext
	{
		public ECommerceAPIContext(DbContextOptions options):base(options)
		{
		}
		public DbSet<Product> Products { get; set; }
		public DbSet<Customer> Customers { get; set; }
		public DbSet<Order> Orders { get; set; }

        public override async Task<int> SaveChangesAsync(CancellationToken cancellationToken = default)
        {
			var datas = ChangeTracker.Entries<BaseEntity>();
			foreach (var data in datas)
			{
				switch (data.State)
				{
					case EntityState.Added:
						data.Entity.Id = Guid.NewGuid();
						data.Entity.CreatedDate = DateTime.UtcNow;
						break;
					case EntityState.Modified:
						data.Entity.UpdatedDate = DateTime.UtcNow;
						break;
					default:
						break;
				}
			}
            return await base.SaveChangesAsync(cancellationToken);
        }
    }
}

