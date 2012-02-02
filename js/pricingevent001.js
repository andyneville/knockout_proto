{
	"pricingEvent": {
		"pricedAt" : "2010/09/13 14:40:02",
		"market" :"Amazon US",
		"marketPrice" : {
			"listPrice" : 6.28,
			"delta" : 0,
			"shippingCost" : 0,
			"currency" : "USD"
		},		
		"sellerPrice" : {
			"listPrice" : 6.28,
			"shippingCost" : 0
			"currency" : "USD"			
		}
		"inventory" : {
			"product" : {
				"title" : "The Chancellor Manuscript",
				"ASIN" : "0553260944",
				"ISBN-13" : 9780553260946
				"category" : "Books"
			},
			"condition" : "Like New",
			"fulfillment" : "FBA"
		},
		"offerSummary" : {
			"new" : 17,
			"used" : 234,
			"collectible" : 1
		},			
		"offers" : [ 
			"offer" : {
				"competitor" : "parrishez_bookstore",
				"feedback" : 389,
				"condition" : "Like New",
				"quantity" : 1,
				"price" : 0.99,
				"shippingCost" : 3.99				
			},
			"offer" : {
				"competitor" : "bigspender2043",
				"feedback" : 13,
				"condition" : "Like New",
				"quantity" : 1,
				"price" : 2.00,
				"shippingCost" : 3.99				
			},
			"offer" : {
				"competitor" : "fortworthla",
				"feedback" : 273,
				"condition" : "Like New",
				"quantity" : 1,
				"price" : 2.29,
				"shippingCost" : 3.99				
			},
			"offer" : {
				"competitor" : "tampabaybookslf",
				"feedback" : 352,
				"condition" : "Like New",
				"quantity" : 1,
				"price" : 2.75,
				"shippingCost" : 3.99				
			}
		],		
		"steps" : [
            "Ignored parrishez_bookstore by name.",
            "Ignored bigspender2043 for low feedback.",
            "Matched fortworthla."
        ],		
		"strategy" : {
			"name" : "SameOrBetter With ShippingCost",
			"description" : "Match the lowest price. Only consider items in the same or better condition as my item. If no competitive listings are available, list the item at 90% of the market price. Treat Amazon as a competitor. Consider shipping cost."
		}
	}
}