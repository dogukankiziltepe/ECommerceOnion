using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ECommerceAPI.Application.Abstractions;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace ECommerceAPI.API.Controllers
{
    [Route("api/[controller]")]
    public class ProductsController : Controller
    {
        private IProductService _productService;

        public ProductsController (IProductService productService)
        {
            _productService = productService;
        }
        [HttpGet]
        public IActionResult GetProducts()
        {
            var products = _productService.GetProducts();
            return Ok(products);
        }

    }
}

