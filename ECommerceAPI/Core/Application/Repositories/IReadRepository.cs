using System;
using System.Linq.Expressions;
using ECommerceAPI.Domain.Entities.Common;

namespace ECommerceAPI.Application.Repositories
{
	public interface IReadRepository<T>: IRepository<T> where T : BaseEntity
	{
		public IQueryable<T> GetAll(bool tracking = true);
		public Task<T> GetById(string id, bool tracking = true);
		public Task<T> GetSingleAsync(Expression<Func<T, bool>> expression,bool tracking=true);
		public IQueryable<T> GetMany(Expression<Func<T, bool>> expression,bool tracking=true);
	}
}

