<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<html>

<head>
	<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	<title>Users List</title>
	<link href="<c:url value='/static/css/bootstr.css' />" rel="stylesheet"></link>
	<link href="<c:url value='/static/css/ap.css' />" rel="stylesheet"></link>
        
        <style>
            body{
        background-color: #269abc;
        
          }
        </style>
</head>

<body>
	<div class="generic-container">
		<%@include file="authheader.jsp" %>	
		<div class="panel panel-default">
			  <!-- Default panel contents -->
		  	<div class="panel-heading"><span class="lead">List of Courses </span></div>
			<table class="table table-hover">
	    		<thead>
		      		<tr>
				        <th>Instrument</th>
				        <th>Course level</th>
				    
				     
				</tr>
		    	</thead>
	    		<tbody>
				<c:forEach items="${courses}" var="course">
					<tr>
						<td>${course.instrument}</td>
						<td>${course.courseLevel}</td>
                                                
                                                
		
					</tr>
				</c:forEach>
	    		</tbody>
	    	</table>
		</div>
	<div class="well">
		 		<a href="<c:url value='/home' />">Home page</a>
		 	</div>	
		 	
                        
   	</div>
</body>
</html>