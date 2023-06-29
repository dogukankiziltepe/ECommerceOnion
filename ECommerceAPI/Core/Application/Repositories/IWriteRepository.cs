using System;
using ECommerceAPI.Domain.Entities.Common;

namespace ECommerceAPI.Application.Repositories
{
	public interface IWriteRepository<T> : IRepository<T> where T : BaseEntity
	{
		public Task<bool> AddAsync(T model);
		public Task<bool> AddRangeAsync(List<T> datas);
		public bool Remove(T model);
        public bool RemoveRange(List<T> datas);
        Task<bool> RemoveAsync(string id);
        bool Update(T model);
        Task<int> SaveAsync();

    }
}

