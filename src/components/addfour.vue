<template>


<nav class="navbar navbar-default" role="navigation">
	<div class="container-fluid"> 
	<div class="navbar-header">
		<a class="navbar-brand" href="#">菜鸟教程</a>
	</div>
	<div id="myexample">
		<ul class="nav navbar-nav">
			<li class="active"><a href="#">iOS</a></li>
			<li><a href="#">SVN</a></li>
			<li class="dropdown"><a href="#" class="dropdown-toggle" data-toggle="dropdown">Java <b class="caret"></b></a>
				<ul class="dropdown-menu">
					<li><a id="action-1" href="#">meter</a></li>
					<li><a href="#">EJB</a></li>
					<li><a href="#">Jasper Report</a></li>
					<li class="divider"></li>
					<li><a href="#">分离的链接</a></li>
					<li class="divider"></li>
					<li><a href="#">另一个分离的链接</a></li>
				</ul>
			</li>
		</ul>
	</div>
	</div>	
</nav>

</template>
<script>

export default {
    data(){
        return{
          
        }
    },
    mounted(){
        $(".dropdown-toggle").dropdown('toggle');
        // $(function () { $('.popover-show').popover('show');});
		// $(function () { $('.popover-hide').popover('hide');});
		// $(function () { $('.popover-destroy').popover('destroy');});
		// $(function () { $('.popover-toggle').popover('toggle');});
		// $(function () { $(".popover-options a").popover({html : true });});
    }
}
</script>
<style>

</style>
